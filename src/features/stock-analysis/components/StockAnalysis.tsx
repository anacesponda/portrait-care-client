import React, { useState } from 'react';
import StockStatistics from './StockStatistics';
import './StockAnalysis.css';

const StockAnalysis: React.FC = () => {
  const [ticker, setTicker] = useState<string>('');
  const [searchTicker, setSearchTicker] = useState<string>('');

  const handleSearch = () => {
    setSearchTicker(ticker);
  };

  return (
    <div className="StockAnalysis">
      <div className="search-bar">
        <label htmlFor="stock-ticker" className="ticker-label">Enter a Stock Ticker</label>
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="Enter a Stock Ticker"
        />
        <button onClick={handleSearch} type="submit">Search</button>
      </div>
      <StockStatistics ticker={searchTicker} />
    </div>
  );
}

export default StockAnalysis;
