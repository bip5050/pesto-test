import React, { FC } from "react";

import { toast } from "react-toastify";

const TaskListTable = ({ fetchAllTasks,taskList,deleteTask, setTargetTask, setUpdateOpen }) => {
const handleDeleteTask = async (id) =>{
    if (window.confirm("Delete?"))
        { 
            try {
                const response = await deleteTask(id);
                fetchAllTasks()
              
              } catch (error) {
                console.error("Failed to create tasks:", error);
                toast.error("Failed to create tasks:. Please try again later.");
              }
        }
}

    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
            </thead>  <tbody>

                {taskList.map((task, index) => {

                    return <tr key={index}>
                        <td className="border px-4 py-2">{task.title}</td>
                        <td className="border px-4 py-2">{task.description} </td>
                        <td className="border px-4 py-2">{task.status}</td>
                        <td className="flex border px-4 py-2  ">
                            <button onClick={()=> {
                                setUpdateOpen(true);
                                setTargetTask(task)
                            }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2">
                                Update
                            </button>
                            <button onClick={()=>handleDeleteTask(task._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                })}




            </tbody> </table>
    );
};

export default TaskListTable;
