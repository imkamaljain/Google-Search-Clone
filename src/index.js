import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export { default as Home } from './components/Home/Home';
export { default as Results } from './components/Results/Results';
export { default as Data } from './components/Data/Data';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);