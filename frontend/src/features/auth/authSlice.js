import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/api';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await API.post('/auth/login', credentials);
  localStorage.setItem('token', response.data.token);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: localStorage.getItem('token'), loading: false, error: null },
  reducers: {
    logout(state) {
      state.token = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
