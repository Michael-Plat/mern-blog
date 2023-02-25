import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { postsReducer } from './slices/posts';
import { authReduser } from './slices/auth';

export const store = configureStore({
  reducer: {
    auth: authReduser,
    posts: postsReducer,
  },
});

export const useAppDispatch = () => useDispatch();
