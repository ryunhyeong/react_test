'use client'
import React, {FormEventHandler, useState} from 'react';
import { CiCirclePlus } from "react-icons/ci";
import Modal from "@/component/Modal";
import {addTodo} from "@/api";
import {useRouter} from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

import {refreshReducer} from "next/dist/client/components/router-reducer/reducers/refresh-reducer";
import {data} from "browserslist";

const AddTask = () => {
    // 새로고침해야 task가 만들어지는 이슈 해결 next/router 아님
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('');
    const [newTaskDescription, setNewTaskDescription] = useState<string>('');
    const handleSubmitNewTodo:FormEventHandler<HTMLFormElement> =
        async (e)=>{
        e.preventDefault();
        await addTodo({
            id: uuidv4(), // id는 매번 다르게 생성되야함 => UUID사용
            text: newTaskValue,
            description: newTaskDescription
        });
        setNewTaskValue("");
        setModalOpen(false);
            router.refresh();
    }

    const addTask = () =>{
        const datass = {
            "name":"ryun",
            "phone":"010123456"
            //시리얼라이징
        }
        router.push('/addtask');
    //         ?name='+datass.name+'&phone='+datass.phone
    }

    return (
        <div>
          <button onClick={addTask} className='btn btn-primary w-full'>
            {/*()=> setModalOpen(true)}*/}
              Add new task<CiCirclePlus size={20}/>
          </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                {/*submit제출시에*/}
                <form onSubmit={handleSubmitNewTodo}>
                    <h3 className='font-bold text-lg'>Add new task</h3>
                    <div className='modal-action'>
                    {/*value -> defaultvalue로 바꿔야하는게 아닌가?*/}
                    <input value={newTaskValue} onChange={e=> setNewTaskValue(e.target.value)}
                           type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                    <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddTask;