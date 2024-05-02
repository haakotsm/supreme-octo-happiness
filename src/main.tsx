import { worker } from '@mocks/worker.ts';
import '@styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages';

await worker.start();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
