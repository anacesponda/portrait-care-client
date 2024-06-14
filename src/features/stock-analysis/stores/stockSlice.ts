import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchStockData } from '../api/stockApi';
import { StockData } from '../types/stockTypes';

interface StockState {
  data: StockData | null;
  loading: boolean;
  error: string | null;
}

const initialState: StockState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchStock = createAsyncThunk(
  'stock/fetchStock',
  async (ticker: string) => {
    const response = await fetchStockData(ticker);
    return response;
  }
);

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStock.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStock.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch stock data';
      });
  },
});

export default stockSlice.reducer;
