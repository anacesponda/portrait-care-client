import React from 'react';
import { useStock } from '../hooks/useStock';
import './StockStatistics.css';

interface StockStatisticsProps {
  ticker: string;
}

const StockStatistics: React.FC<StockStatisticsProps> = ({ ticker }) => {
  const { stockData, loading, error } = useStock(ticker);

  return (
    <div className="stock-statistics">
      {loading && <div className="spinner"></div>}
      {error && <p>Error: {error}</p>}
      {stockData ? (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Maximum</th>
              <th>Minimum</th>
              <th>Average</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              <td>{stockData.maxPrice}</td>
              <td>{stockData.minPrice}</td>
              <td>{stockData.avgPrice}</td>
            </tr>
            <tr>
              <td>Volume</td>
              <td>{stockData.maxVolume}</td>
              <td>{stockData.minVolume}</td>
              <td>{stockData.avgVolume}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        !loading && ticker && <p>No data.</p>
      )}
    </div>
  );
}

export default StockStatistics;
