import { configureStore } from '@reduxjs/toolkit';
import {reducer as counterReducer } from '../features/count/counterSlice';
import { reducer as postReducer } from '../features/post/postSlice';
import { reducer as commentReducer } from '../features/comment/commentSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    comment:commentReducer
  },
});
