import { useCallback, useState } from "react";
import Options from "./Options";
import { useSelector } from "react-redux";
import TaskformData from "./TaskformData";

const Taskform = ({ setFilteredTasks }) => {
  let tasks = useSelector((state) => state.taskReducer.tasks);
  const [openAddform, setOpenAddform] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleOpenAddForm = useCallback(
    (e) => {
      e.preventDefault();
      setOpenAddform(true);
    },
    [setOpenAddform]
  );
  return (
    <>
      <h2 className="w-full lg:w-1/2 md:w-3/4 mx-3 md:mx-0 bg-white px-2 mb-0 text-2xl font-bold rounded-t-md text-start">
        Tasks
      </h2>
      <form onSubmit={handleOpenAddForm} className="container-custom">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="what is your task ?"
          className="grow rounded-l-md p-2 border-2 border-r-0 border-[#026e9f] outline-[#026e9f]"
        />
        <button
          type="submit"
          className="bg-[#026e9f] text-white rounded-r-md border-2 border-[#026e9f] p-2"
        >
          New Task
        </button>
      </form>
      <Options
        setFilteredTasks={setFilteredTasks}
        tasks={tasks}
        searchText={searchText}
      />
      {openAddform && <TaskformData closeFn={setOpenAddform} flag={"Create"} />}
    </>
  );
};

export default Taskform;
