import React from 'react'
import ReactDOM from 'react-dom/client'
import { worker } from '../mocks/worker.ts'
import App from './App.tsx'
import './index.css'

await worker.start();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
