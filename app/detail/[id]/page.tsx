'use client'


import React, {useState, useEffect} from "react";
import {addTodo, getTodo} from "@/api";
import {v4 as uuidv4} from "uuid";

export default function Home(params:any) {

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    if(title===''){
        getTodo(params.searchParams.index).then((task)=>{
                    console.log(2)
                    setTitle(task.text);
                    setDescription(task.description);
                })
    }
    // getTodo(params.searchParams.index).then((task)=>{
    //         console.log(2)
    //         setTitle(task.text);
    //         setDescription(task.description);
    //     })


    const chage=(e:string)=>{
        setTitle(e)

        console.log(3);
    }

    console.log(1);

    return (
        <main className="max-w-4xl mx-auto mt-8">

            <h2>Title</h2>
            <input type='text' onChange={e=>chage(e.target.value)} value={title}></input>
            <h2>Description</h2>


        </main>
    );
}
