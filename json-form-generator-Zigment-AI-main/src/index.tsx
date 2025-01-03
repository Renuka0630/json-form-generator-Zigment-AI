import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This will include Tailwind CSS
import App from './App'; // Import your main App component

// Creating root for the React app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
