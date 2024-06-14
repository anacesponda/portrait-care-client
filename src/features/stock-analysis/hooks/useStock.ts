import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './useDispatch';
import { RootState } from '../../../stores/store';
import { fetchStock } from '../stores/stockSlice';

export const useStock = (ticker: string) => {
  const dispatch = useAppDispatch();
  const stockData = useSelector((state: RootState) => state.stock.data);
  const loading = useSelector((state: RootState) => state.stock.loading);
  const error = useSelector((state: RootState) => state.stock.error);

  useEffect(() => {
    if (ticker) {
      dispatch(fetchStock(ticker));
    }
  }, [ticker, dispatch]);

  return { stockData, loading, error };
};
