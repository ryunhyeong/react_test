'use client'
import React, {FormEventHandler, useRef, useState} from "react";
import {addTodo} from "@/api";
import {v4 as uuidv4} from "uuid";
import {useRouter, useSearchParams} from "next/navigation";

const Input = ({label, textarea, ...props}) => {
    const classes= "w-full p-1 border-b-2 rounded-sm border-stone-300 " +
        "bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

    const router = useRouter()
    const [newTaskValue, setNewTaskValue] = useState<string>('');
    const [newTaskDescription, setNewTaskDescription] = useState<string>('');

    const title = useRef();
    const description = useRef();

    const handleSubmitNewTodo:FormEventHandler<HTMLFormElement> =
        async (e)=>{
            e.preventDefault();
            console.log(newTaskValue);
            console.log(newTaskDescription);
            // console.log(newTaskDescription);
            await addTodo({
                id: uuidv4(), // id는 매번 다르게 생성되야함 => UUID사용
                text: newTaskValue,
                description: newTaskDescription
            });
            setNewTaskValue("");
            setNewTaskDescription("");
            router.refresh();
        }

    return (


        <p className={"flex flex-col"}>
            <label className={"test-sm font-bold text-stone-500"}>{label}</label>
            {textarea ? <textarea value={newTaskDescription} onChange={e=>setNewTaskDescription(e.target.value)} className={classes} {
                ...props}/> : <input value={newTaskValue} onChange={e=> setNewTaskValue(e.target.value)}
                                     type="text" placeholder="Type here" className="className={classes} {...props}" />}

            {/*<label className={"test-sm font-bold text-stone-500"}>{label}</label>*/}
            {/*{textarea ? <textarea className={classes} {*/}
            {/*    ...props}/> : <input className="className={classes} {...props}" />}*/}

            {/*<p className={"flex flex-col"}>*/}
            {/*    <label className={"test-sm font-bold text-stone-500"}>{label}</label>*/}
            {/*    {textarea ? <textarea className={classes} {*/}
            {/*        ...props}/> : <input className={classes} {...props}/>}*/}
            {/*</p>*/}
        </p>

);
};

export default Input;