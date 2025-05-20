import React from 'react';
import { AppProvider } from './context/AppContext';
import AppRoutes from './routes/AppRoutes';
import './i18n'; 
import './app.css';

const App: React.FC = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);

export default App;
