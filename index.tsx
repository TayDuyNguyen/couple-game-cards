import React from 'react';
import ReactDOM from 'react-dom/client';
// Fix: Using explicit extension './App.tsx' to clearly differentiate from 'app.tsx' and resolve casing errors.
import App from './App.tsx';

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
