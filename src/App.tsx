import React from 'react';
import AppProvider from './AppProvider';
import StockAnalysis from './features/stock-analysis/components/StockAnalysis';

const App: React.FC = () => {
  return (
    <AppProvider>
      <StockAnalysis/>
    </AppProvider>
  );
};

export default App;
