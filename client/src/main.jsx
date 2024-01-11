// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterSetup from './routers/RouterSetup.jsx'

import { store } from './redux/store.js'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <RouterSetup />
  // </React.StrictMode>,
  <Provider store={store}>
    <RouterSetup />
  </Provider>,
)
