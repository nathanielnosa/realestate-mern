// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterSetup from './routers/RouterSetup.jsx'

import { persistor, store } from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <RouterSetup />
  // </React.StrictMode>,
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterSetup />
    </PersistGate>
  </Provider>,
)
