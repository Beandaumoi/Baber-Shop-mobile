import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Login} from '../action/AuthAction';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    accessToken: null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: state => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(Login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.accessToken = action.payload; // Lưu access_token vào state
      })
      .addCase(Login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Lưu lỗi nếu có
      });
  },
});
export const {logout} = authSlice.actions;
export default authSlice.reducer;
