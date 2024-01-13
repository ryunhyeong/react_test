import React from 'react';
import {ITask} from "@/types/tasks";
import Task from "@/component/Task";

interface TodoListProps {
    tasks: ITask[]
}

const TodoList= ({tasks}: TodoListProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Tasks</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {/*tasks배열값중 특정값을 가져옴*/}
                {tasks.map((task)=> <Task key={task.id} task={task}/>)}

                </tbody>
            </table>
        </div>
    );
};

export default TodoList;