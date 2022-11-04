import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  registerUser,
  getUserDetails,
  logoutUser,
  uploadNewAvatar,
  updateUserInfo,
} from './userActions';

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // Register
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.error = null;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // Login
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.error = null;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // getDetails
    [getUserDetails.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.success = true;
      state.error = null;
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // Logout
    [logoutUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: (state) => {
      state.loading = false;
      state.userInfo = null;
      state.error = null;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // update Avatar
    [uploadNewAvatar.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [uploadNewAvatar.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo.avatar_url = payload;
      state.error = null;
    },
    [uploadNewAvatar.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // update userInfo
    [updateUserInfo.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateUserInfo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.userInfo = {
        ...state.userInfo,
        ...payload,
      };
    },
    [updateUserInfo.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
