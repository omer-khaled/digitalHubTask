import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: { taskReducer, authReducer },
});

export default store;
