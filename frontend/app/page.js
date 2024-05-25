import Image from "next/image";
import TaskList from "../components/TaskList/TaskList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <div className="min-h-screen md:px-5 lg:px-10  relative bg-white">
           <ToastContainer />
   <TaskList/>
    </div>
  );
}
