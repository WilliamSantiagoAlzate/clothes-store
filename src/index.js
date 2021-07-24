import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes/index';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
