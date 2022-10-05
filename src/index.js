import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './app';
import './Assets/index.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter>
  <App></App>
  </BrowserRouter>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
