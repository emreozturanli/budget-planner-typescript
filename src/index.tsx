import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExpenseContextProvider } from './context/expenseContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ExpenseContextProvider>
    <App />
  </ExpenseContextProvider>
);
