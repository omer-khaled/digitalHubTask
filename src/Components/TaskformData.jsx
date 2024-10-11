import { useState } from "react";
import { useDispatch } from "react-redux";
import { create, update } from "../store/tasksSlice";
import { useRef } from "react";
import handleToast from "../store/handleToast";
const TaskformData = ({ closeFn, flag, task }) => {
  const dispatch = useDispatch();
  const descriptionRef = useRef(task ? task.description : "");
  const statusRef = useRef(task ? task.status : "");
  let [error, setEror] = useState(false);
  const handleAddTask = (e) => {
    e.preventDefault();
    let description = descriptionRef.current.trim();
    if (description === "") {
      setEror(true);
      handleToast(false, "Task Should has a description!");
      return;
    }
    const newTask = {
      index: Date.now(),
      description,
      status: "Not Started",
      createdAt: new Date().getTime(),
    };
    dispatch(create(newTask));
    handleToast(true, "Task added successfully!");
    closeFn(false);
  };
  const handleUpdateTask = (e) => {
    e.preventDefault();
    let description = descriptionRef.current.trim();
    let status = statusRef.current.trim();
    if (description === "") {
      setEror(true);
      handleToast(false, "Task Should has a description!");
      return;
    }
    const newTask = { ...task, description, status };
    console.log(newTask);
    dispatch(update(newTask));
    handleToast(true, "Task Updated successfully!");
    closeFn(false);
  };
  const handleCloseButton = () => {
    closeFn(false);
  };
  return (
    <>
      <section className=" flex justify-center items-center bg-[#4a4a4a38] inset-0 z-10 fixed">
        <form
          onSubmit={flag == "Create" ? handleAddTask : handleUpdateTask}
          className=" bg-slate-900 rounded p-3 relative w-1/2 flex flex-col justify-center items-end"
        >
          <span
            onClick={handleCloseButton}
            className="text-[25px] text-white hover:text-red-600 absolute top-0 right-1 cursor-pointer transition-colors"
          >
            &times;
          </span>
          <h1 className=" w-full text-white mb-3 text-center">{flag} Task</h1>
          <div className="w-full flex justify-center items-center space-x-1 mb-3">
            <input
              type="text"
              defaultValue={task && task.description}
              onChange={(e) => {
                descriptionRef.current = e.target.value;
              }}
              onMouseDown={() => {
                setEror(false);
              }}
              placeholder="Task Description..."
              className={`w-full grow rounded-md p-1 border-1 border-[#026e9f] outline-[#026e9f] ${
                error ? "border-red-700 border-4" : ""
              }`}
            />
            {flag != "Create" && (
              <select
                onChange={(e) => (statusRef.current = e.target.value)}
                defaultValue={task && task.status}
                className="border p-1 border-1 text-sm rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#026e9f]"
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Finished">Finished</option>
              </select>
            )}
          </div>
          <button
            type="submit"
            className={`${
              flag == "Create" ? "bg-[#026e9f]" : "bg-yellow-500"
            } text-white rounded-md p-1 text-center mt-2 px-10 text-sm`}
          >
            {flag}
          </button>
        </form>
      </section>
    </>
  );
};
export default TaskformData;
