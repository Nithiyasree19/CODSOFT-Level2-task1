import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This file is the entry point for the React application.
// It imports the main App component and renders it into the root element of the HTML document.
// The application uses Bootstrap for styling, which is imported at the top of the file.
// The React.StrictMode is used to highlight potential problems in the application during development.
// The ReactDOM.createRoot method is used to create a root for the React application, which
