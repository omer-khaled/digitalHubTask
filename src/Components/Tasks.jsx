import Task from "./Task";

const Tasks = ({ filteredTasks }) => {
  return (
    <div className="w-full lg:w-1/2 md:w-3/4 mx-3 md:mx-0 bg-white p-2 rounded-b-md">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredTasks.map((el) => {
          return <Task key={el.index} task={el} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
