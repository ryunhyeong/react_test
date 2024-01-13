'use client'

import AddTask from "@/component/AddTask";
import React, {FormEventHandler, useState} from "react";
import TodoList from "@/component/TodoList";
import {addTodo, getAllTodos} from "@/api";
import {useRouter, useSearchParams} from "next/navigation";
import Input from "@/component/Input";
import {v4 as uuidv4} from "uuid";

export default function Home() {

    const serachParams = useSearchParams();

    const router = useRouter()
    const [newTaskValue, setNewTaskValue] = useState<string>('');
    const [newTaskDescription, setNewTaskDescription] = useState<string>('');

    // const title = useRef();
    // const description = useRef();

    const handleSubmitNewTodo:FormEventHandler<HTMLFormElement> =
        async (e)=>{
            e.preventDefault();
            await addTodo({
                id: uuidv4(), // id는 매번 다르게 생성되야함 => UUID사용
                text: newTaskValue,
                description: newTaskDescription
            });
            setNewTaskValue("");
            setNewTaskDescription("");
            router.refresh();
        }
    const addTask = () =>{
        console.log("hihi")
        // console.log(newTaskValue);
        // console.log(newTaskDescription);
        const datass = {
            "name":"ryun",
            "phone":"010123456"
            //시리얼라이징

        }
        router.push('/')
    }

    return (
        <main className="max-w-4xl mx-auto mt-8">
            {/*<form onSubmit={handleSubmitNewTodo}>*/}
            <form onSubmit={handleSubmitNewTodo}>
                <div>
                    <h2>Title</h2>
                    <input value={newTaskValue} onChange={e=> setNewTaskValue(e.target.value)}
                           type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                    <h2>Description</h2>
                    <input value={newTaskDescription} onChange={e=> setNewTaskDescription(e.target.value)}
                           type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                </div>
                <button type="submit" onClick={addTask} className={"transform translate-x-[10px]"}>Save</button>
                <button type="submit" onClick={addTask} className={"transform translate-x-[40px]"}>Cancel</button>
            </form>

        </main>
    );
}
