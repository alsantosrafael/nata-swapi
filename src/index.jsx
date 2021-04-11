import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStorage } from './GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStorage>
      <App />
    </GlobalStorage>
  </React.StrictMode>,
  document.getElementById('root')
);
