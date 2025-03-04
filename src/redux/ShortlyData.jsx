import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTourPackages = createAsyncThunk(
  'tour/fetchTourPackages',
  async () => {
    const response = await fetch('https://671929a77fc4c5ff8f4cadf8.mockapi.io/api/TourData');
    const data = await response.json();
    return data;
  }
);

const tourSlice = createSlice({
  name: 'tour',
  initialState: {
    weekly: [],
    monthly: [],
    yearly: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTourPackages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTourPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.weekly = action.payload.filter(pkg => pkg.status === 'weekly');
        state.monthly = action.payload.filter(pkg => pkg.status === 'monthly');
        state.yearly = action.payload.filter(pkg => pkg.status === 'yearly');
      })
      .addCase(fetchTourPackages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tourSlice.reducer;
