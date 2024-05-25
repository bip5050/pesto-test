import React, { useState } from "react";

const CreateTaskModal = ({ isOpen, onClose, createTask , fetchAllTasks}) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleCreateTask = async () => {
    if (!task.title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      const response = await createTask(task);
      fetchAllTasks()
    
    } catch (error) {
      console.error("Failed to create tasks:", error);
      toast.error("Failed to create tasks:. Please try again later.");
    }

    // Clear input fields
    setTask({
      title: "",
      description: "",
      status: "",
    });

    // Close the modal
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 z-10">
        <h2 className="text-xl font-bold mb-4">Create Task</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border rounded py-2 px-3"
            value={task.title}
            onChange={handleInputChange}
          />
          {error && <small className="text-red-500">{error}</small>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1 font-semibold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full border rounded py-2 px-3"
            rows="4"
            value={task.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block mb-1 font-semibold">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="w-full border rounded py-2 px-3"
            value={task.status}
            onChange={handleInputChange}
          >
            <option value="">Select Status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleCreateTask}
          >
            Create
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
