// Import React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Bootstrap and Bootstrap Icons
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Custom Style
import './styles/styles.css';

// Render react DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
