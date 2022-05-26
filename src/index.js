import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';
import AppContextProvider from './services/contexts/AppContext'
import UserContextProvider from './services/contexts/UserContext'

createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
