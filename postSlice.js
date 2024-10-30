import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts: (state, action) => action.payload,
    addPost: (state, action) => [action.payload, ...state],
    updatePost: (state, action) => state.map(post =>
      post._id === action.payload._id ? action.payload : post
    ),
  },
});

export const { setPosts, addPost, updatePost } = postSlice.actions;
export default postSlice.reducer;
