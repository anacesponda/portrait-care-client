import React from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default AppProvider;
