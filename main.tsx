
import React from 'react';
import ReactDOM from 'react-dom/client';
// Fix: Update casing to uppercase './App' to resolve duplicate file inclusion errors in case-sensitive build environments.
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
