import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import stockReducer from '../features/stock-analysis/stores/stockSlice';

const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
