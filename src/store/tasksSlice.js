import { createSlice } from "@reduxjs/toolkit";

let tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        description: "description1",
        status: "Not Started",
        index: 1,
        createdAt: 1728655834484,
      },
      {
        description: "description2",
        status: "In Progress",
        index: 2,
        createdAt: 1728655834485,
      },
      {
        description: "description3",
        status: "Finished",
        index: 3,
        createdAt: 1728655834486,
      },
      {
        description: "description4",
        status: "In Progress",
        index: 4,
        createdAt: 1728655834487,
      },
      {
        description: "description5",
        status: "Finished",
        index: 5,
        createdAt: 1728655834489,
      },
    ],
  },
  reducers: {
    create: (state, action) => {
      state.tasks.push(action.payload);
    },
    remove: (state, action) => {
      state.tasks = state.tasks.filter(
        (el) => el.index != action.payload.index
      );
    },
    update: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (el) => el.index == action.payload.index
      );
      state.tasks[taskIndex] = action.payload;
    },
    getCachedTasks: (state) => {
      const cachedTasks = localStorage.getItem("tasks");
      if (cachedTasks) {
        state.tasks = JSON.parse(cachedTasks);
      }
    },
  },
});

const taskReducer = tasksSlice.reducer;
export default taskReducer;
export const { create, remove, update, getCachedTasks } = tasksSlice.actions;
