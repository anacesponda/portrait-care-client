import axios from 'axios';
import { StockData } from '../types/stockTypes';

const API_URL = 'http://localhost:3000/api/v1/stocks/statistics';

export const fetchStockData = async (ticker: string): Promise<StockData> => {
  const response = await axios.get(`${API_URL}?ticker=${ticker}`);
  const data = response.data;

  return {
    avgPrice: data.average_price,
    avgVolume: 0,
    maxVolume: data.max_volume,
    minVolume: data.min_volume,
    maxPrice: data.max_price,
    minPrice: data.min_price,
  };
};
