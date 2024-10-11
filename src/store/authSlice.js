import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
  },
  reducers: {
    login: (state) => {
      console.log("done");
      state.isLogin = true;
    },
  },
});

const authReducer = authSlice.reducer;
export default authReducer;
export const { login } = authSlice.actions;
