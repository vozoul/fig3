import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Ctxt from './services/contexts/index.js'

createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Ctxt.AppContextProvider>
      <Ctxt.UserContextProvider>
        <App />
      </Ctxt.UserContextProvider>
    </Ctxt.AppContextProvider>
  </React.StrictMode>
);
