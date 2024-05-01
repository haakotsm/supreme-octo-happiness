import { worker } from '@mocks/worker.ts';
import App from '@pages/App.tsx';
import '@styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

await worker.start();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
