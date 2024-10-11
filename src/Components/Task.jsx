import { useState } from "react";
import TaskformData from "./TaskformData";
import { useDispatch } from "react-redux";
import { remove } from "../store/tasksSlice";

const Task = ({ task }) => {
  let [isOpen, setIsopen] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-[#4a4a4a] text-white shadow-md rounded-lg p-1">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <h3 className="grow text-base font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap">
            {task.description}
          </h3>
          <span
            onClick={() => setIsopen(true)}
            className="text-yellow-500 cursor-pointer"
          >
            &#9997;
          </span>
          <span
            onClick={() => {
              dispatch(remove(task));
            }}
            className="text-red-600 cursor-pointer"
          >
            &#128465;
          </span>
        </div>
        <p
          className={`mt-1 w-fit rounded p-1 ms-auto text-sosm  ${
            task.status == "Not Started"
              ? " bg-red-600"
              : task.status == "In Progress"
              ? "bg-yellow-500"
              : "bg-blue-500"
          }`}
        >
          {task.status}
        </p>
      </div>
      {isOpen && (
        <TaskformData closeFn={setIsopen} flag={"Update"} task={task} />
      )}
    </>
  );
};
export default Task;
