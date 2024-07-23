import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { differentialScriptLoader, stylesheetLoader } from './scriptLoader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const fluidScript = document.createElement('script');
differentialScriptLoader(
  'https://dsfe50dspcxki.cloudfront.net/fluid/build/fluid.esm.js',
  'https://dsfe50dspcxki.cloudfront.net/fluid/build/fluid.js',
  fluidScript
);
stylesheetLoader('https://dsfe50dspcxki.cloudfront.net/fluid/build/fluid.css');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
