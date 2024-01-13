'use client'

import AddTask from "@/component/AddTask";
import React from "react";
import TodoList from "@/component/TodoList";
import {getAllTodos} from "@/api";
import { useSearchParams } from "next/navigation";
import {useRouter} from 'next/router';

export default function Home(params:any) {

    const serachParams = useSearchParams();
    // const router = useRouter();

    console.log(params.params.phone) ;
    console.log(serachParams.get("name"));
    console.log(serachParams.get("phone"));


    return (
        <main className="max-w-4xl mx-auto mt-8">
            <h2>phone</h2>
        </main>
    );
}
