import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    addPost: (state, action) => state.concat(action.payload),
  },
});
export const { addPost } = postSlice.actions;
export const { reducer } = postSlice;
