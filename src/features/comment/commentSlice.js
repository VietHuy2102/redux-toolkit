import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name:"comment",
  initialState:[],
  reducers:{
    addComment: (state,action) => state.concat(action.payload)
  }
})
export const {addComment} =  commentSlice.actions
export const {reducer} = commentSlice