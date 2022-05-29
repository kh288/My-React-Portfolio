// Import react
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Custom Style
import './styles/styles.css';

// Render DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
