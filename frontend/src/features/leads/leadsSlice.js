import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/api';

export const fetchLeads = createAsyncThunk('leads/fetchLeads', async () => {
  const response = await API.get('/leads');
  return response.data;
});

const leadsSlice = createSlice({
  name: 'leads',
  initialState: { leads: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.loading = false;
        state.leads = action.payload;
      })
      .addCase(fetchLeads.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default leadsSlice.reducer;
