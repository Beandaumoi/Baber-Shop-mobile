import {createAsyncThunk} from '@reduxjs/toolkit';
import AuthApi from '../../network/AuthApi';

export const Login = createAsyncThunk(
  'auth/login',
  async ({phoneNumber, password}, thunkAPI) => {
    try {
      const response = await AuthApi.login({
        phoneNumber: phoneNumber,
        password: password,
      });

      if (response.status < 400 && response.data.accessToken) {
        console.log('accessToken: ', response.data.accessToken);
        return response.data.accessToken; // Trả dữ liệu khi thành công
      } else {
        console.log('err', response.message);
        return thunkAPI.rejectWithValue({
          statusCode: response.status || 400,
          message: response.message || 'Đăng nhập thất bại',
        });
      }
    } catch (error) {
      console.log('Lỗi kết nối: ', error.message);
      return thunkAPI.rejectWithValue(error.message || 'Lỗi kết nối');
    }
  },
);
