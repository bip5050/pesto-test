import { useContext, useState } from "react";
import callApi from "@/app/utils/api/call-api";
import { toast } from "react-toastify";


const useTaskAp = () => {

  const [loading, setLoading] = useState(false);
  
  const { del, post, get, put } = callApi();

  const getAllTasks = async () => {
    setLoading(true);
    try {
      const response = await get("/api/tasks");
      //console.log("response",response)
    
      return response;
    } catch (error) {
      console.log("Failed to fetch tasks", error);
      toast.error("Failed to fetch task. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  const createTask = async (data) => {
   // console.log("datac",data)
    setLoading(true);
    try {
      const response = await post(`/api/tasks`,{...data});
      //console.log("response",response)
    
      return response;
    } catch (error) {
      console.log("Failed to create create:", error);
      toast.error("Failed to create task. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (id,data) => {

    setLoading(true);
    try {
      const response = await put(`/api/tasks/${id}`,{...data});
     toast.success("Updated")
    
      return response;
    } catch (error) {
      console.log("Failed to update create:", error);
      toast.error("Failed to update task. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const deleteTask = async (id) => {

    setLoading(true);
    try {
      const response = await del(`/api/tasks/${id}`);
      //console.log("response",response)
     toast.success("Deleted")
      return response;
    } catch (error) {
      console.log("Failed to update create:", error);
      toast.error("Failed to update task. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  return {
    loading,
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
  };
};

export default useTaskAp;
