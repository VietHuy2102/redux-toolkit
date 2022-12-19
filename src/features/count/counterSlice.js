import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name:'counter',
  initialState:0,
  reducers:{
    increment:(state)=>state+1,
    decrement:(state)=>state-1,
    increAmount:(state,action)=> state + action.payload
  }
})
export const {increment, decrement, increAmount} = countSlice.actions
export const { reducer} = countSlice