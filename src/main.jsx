import React from 'react';
import { UserProvider } from './userContext';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
  </UserProvider>
);
