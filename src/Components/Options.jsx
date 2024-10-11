import { useEffect, useState } from "react";

const Options = ({ setFilteredTasks, tasks, searchText }) => {
  const [sortOrder, setSortOrder] = useState("Oldest");
  const [filterStatus, setFilterStatus] = useState("All");
  useEffect(() => {
    const handeSort = () => {
      let newTasks = tasks.filter(
        (task) =>
          (filterStatus === "All" ? true : task.status === filterStatus) &&
          task.description.toLowerCase().includes(searchText.toLowerCase())
      );
      if (sortOrder == "Newest") {
        newTasks = newTasks.sort((a, b) => {
          if (a.createdAt < b.createdAt) {
            return 1;
          } else {
            return -1;
          }
        });
      } else {
        newTasks = newTasks.sort((a, b) => {
          if (a.createdAt > b.createdAt) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      setFilteredTasks(newTasks);
    };
    handeSort();
  }, [tasks, filterStatus, setFilteredTasks, sortOrder, searchText]);
  return (
    <div className="w-full lg:w-1/2 md:w-3/4 mx-3 md:mx-0 bg-white p-1">
      <div className="my-2 flex justify-end items-center space-x-2">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border p-1 text-sm rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#026e9f]"
        >
          <option value="All">All</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Finished">Finished</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
          }}
          className="border p-1 text-sm rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#026e9f]"
        >
          <option value="Oldest">Oldest</option>
          <option value="Newest">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default Options;
