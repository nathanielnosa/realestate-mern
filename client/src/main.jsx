import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterSetup from './routers/RouterSetup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterSetup />
  </React.StrictMode>,
)
