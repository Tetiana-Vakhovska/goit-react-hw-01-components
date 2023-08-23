import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import {soshForm} from 'components/form';

ReactDOM.createRoot(document.getElementById('soshForm')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
