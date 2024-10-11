import { useState } from "react";
import Taskform from "./Taskform";
import Tasks from "./Tasks";
import { ToastContainer } from "react-toastify";
import WithGuard from "../custom/WithGardes";
const Taskcontainer = () => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  return (
    <>
      <section className="grow rounded-md flex flex-col justify-center items-center px-2 md:px-0">
        <Taskform setFilteredTasks={setFilteredTasks} />
        <Tasks filteredTasks={filteredTasks} />
      </section>
      <ToastContainer />
    </>
  );
};

export default WithGuard(Taskcontainer);
