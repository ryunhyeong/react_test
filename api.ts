import {ITask} from "@/types/tasks";
import {get} from "http";

const baseUrl = 'http://localhost:3090';

export const getAllTodos = async (): Promise<ITask[]> => {
    // cache: 'no-store' => 동적 데이터 가져오기 / 데이터가 화면에 바로 표시
    const res = await fetch(`${baseUrl}/tasks`,{ cache: 'no-store' });
    const todos = await res.json();
    return todos;

}
export const getTodo = async (id:string): Promise<ITask> => {
    // cache: 'no-store' => 동적 데이터 가져오기 / 데이터가 화면에 바로 표시
    const res = await fetch(`${baseUrl}/tasks/${id}`,{ cache: 'no-store' });
    const todo = res.json();
    return todo;
}
// export const addTodo = async ()=>

export const addTodo = async (todo:ITask):Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo)
        })
    const newTodo = await res.json();
    return newTodo;
};

export const editTodo = async (todo:ITask):Promise<ITask> => {
    const res = fetch(`${baseUrl}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    })
    const updatedTodo = (await res).json();
    return updatedTodo;
};

export const deleteTodo = async (id:string): Promise<void> => {
    await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE',
    })
};