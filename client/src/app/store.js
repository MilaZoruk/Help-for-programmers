import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from '../features/User/UserSlice';

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});
