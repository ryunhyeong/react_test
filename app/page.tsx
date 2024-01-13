import AddTask from "@/component/AddTask";
import React from "react";
import TodoList from "@/component/TodoList";
import {getAllTodos} from "@/api";

export default async function Home() {

    const hobbis = ["sports", "coock"];
    console.log(hobbis[0]);
    hobbis.push("working");
    console.log(hobbis.findIndex((item)=>{
        return item === 'sports';
    }))
    const tasks = await getAllTodos();
    console.log(tasks);
    return (
        <main className="max-w-4xl mx-auto mt-8">
            <div className="text-center my-5 flex flex-col gap-6">
                <h1 className='text-2xl fond-bold'>Todo List App</h1>
                <AddTask/>
            </div>
            <TodoList tasks={tasks}/>
        </main>
    );
}
