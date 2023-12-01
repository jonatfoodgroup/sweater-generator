import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/images/:id" element={<App />} />
      </Routes>
    </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
