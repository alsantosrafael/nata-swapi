import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStorage } from './GlobalContext';

ReactDOM.render(
  <GlobalStorage>
    <App />
  </GlobalStorage>,
  document.getElementById('root')
);
