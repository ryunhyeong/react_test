'use client'
import React, {FormEventHandler, useState} from "react";
import {ITask} from "@/types/tasks";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "@/component/Modal";
import {addTodo, deleteTodo, editTodo} from "@/api";
import { v4 as uuidv4 } from 'uuid';
import {router} from "next/client";
import {useRouter} from "next/navigation";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

interface TaskProps{
    task: ITask
}


const Task = ({task}:TaskProps) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    // 초기 task.text로 셋팅
    const [editTaskValue, setEditTaskValue] = useState<string>(task.text);
    const [editTaskDescription, setEditTaskDescription] = useState<string>(task.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            text: editTaskValue,
            description: editTaskDescription,
        });
        setEditTaskValue("");
        setOpenModalEdit(false);
        router.refresh();
    };

    const handleSubmitDeleteTodo = async (id:string) => {
        await deleteTodo(id);
        setOpenModalEdit(false);
        router.refresh();
    };
    return (
        <tr key={task.id}>
            <td className={'w-full'}><a href={`/detail/pages.tsx?index=${task.id}`}>{task.text}</a></td>
            <td className="flex gap-5">
                <FaRegEdit onClick={()=>setOpenModalEdit(true)} cursor={"pointer"} className="text-blue-500" size={20}/>
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    {/*submit제출시에*/}
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className='font-bold text-lg'>Edit task</h3>
                        <div className='modal-action'>
                            {/*value -> defaultvalue로 바꿔야하는게 아닌가?*/}
                            <input value={editTaskValue} onChange={e=> setEditTaskValue(e.target.value)}
                                   type="text" placeholder="Type here" className="input input-bordered w-full" />
                            <button type="submit" className="btn">Submit</button>
                        </div>
                    </form>
                </Modal>
                <FaRegTrashCan onClick={()=>setOpenModalDelete(true)} cursor={"pointer"} className="text-red-400" size={20}/>
                <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
                    {/*submit제출시에*/}
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className='font-bold text-lg'>Delete?</h3>
                        <div className='modal-action'>
                           <FaCheck onClick={()=>handleSubmitDeleteTodo(task.id)} cursor={"pointer"} className="text-green-400 transform translate-x-[-40px]" size={50}/>
                            <MdCancel onClick={()=>setOpenModalDelete(false)} cursor={"pointer"} className="text-red-400 transform translate-x-[-20px]" size={50}/>
                        </div>
                    </form>
                </Modal>
            </td>
        </tr>
    );
};

export default Task;