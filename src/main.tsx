import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TableProvider } from './context/TableContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TableProvider>
      <App />
    </TableProvider>
  </React.StrictMode>,
)
