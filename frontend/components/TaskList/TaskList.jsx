"use client";
import React, { useEffect, useState } from "react";
import useTaskApi from "@/hooks/useTaskApi";
import Loader from "../Loaders/Loader";
import CreateTaskModal from "../Modals/CreateTaskModal";
import TaskListTable from "../TaskListTable/TaskListTable";
import UpdateTaskModal from "../Modals/UpdateTaskModal";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [isCreateTaskOpen, setCreateTaskOpen] = useState(false);
  const [isUpdateTaskOpen, setUpdateOpen] = useState(false);
  const [targetTask, setTargetTask] = useState({});
  const [filterStatus, setFilterStatus] = useState("All"); // Default filter value
  const { getAllTasks, createTask, deleteTask, updateTask, loading } = useTaskApi();

  useEffect(() => {
    fetchAllTasks();
  }, []);

  useEffect(() => {
    filterTasks();
  }, [taskList, filterStatus]);

  const fetchAllTasks = async () => {
    try {
      const response = await getAllTasks();
      setTaskList(response.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
      toast.error("Failed to fetch tasks:. Please try again later.");
    }
  };

  const filterTasks = () => {
    if (filterStatus === "All") {
      setFilteredTaskList(taskList);
    } else {
      const filteredTasks = taskList.filter((task) => task.status === filterStatus);
      setFilteredTaskList(filteredTasks);
    }
  };

  const openCreateTask = () => {
    setCreateTaskOpen(true);
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center mt-4">
        <h2 className="text-xl font-bold">Task List</h2>
        <div className="flex items-center">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="mr-4 border rounded py-2 px-3"
          >
            <option value="All">All</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button
            onClick={() => openCreateTask()}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Create Task
          </button>
        </div>
      </div>
      {!loading && (
        <div className="overflow-x-auto">
          {filteredTaskList.length > 0 ? (
            <TaskListTable
              fetchAllTasks={fetchAllTasks}
              deleteTask={deleteTask}
              setTargetTask={setTargetTask}
              setUpdateOpen={setUpdateOpen}
              taskList={filteredTaskList}
            />
          ) : (
            <div className="text-center text-blue-400"> No task found</div>
          )}
        </div>
      )}
      <CreateTaskModal
        createTask={createTask}
        fetchAllTasks={fetchAllTasks}
        isOpen={isCreateTaskOpen}
        onClose={() => setCreateTaskOpen(false)}
      />
      <UpdateTaskModal
        task={targetTask}
        updateTask={updateTask}
        fetchAllTasks={fetchAllTasks}
        isOpen={isUpdateTaskOpen}
        onClose={() => setUpdateOpen(false)}
      />
    </div>
  );
};

export default TaskList;
