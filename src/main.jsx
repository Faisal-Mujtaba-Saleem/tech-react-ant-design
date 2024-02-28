import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { AlertContextProvider } from './contexts/AlertContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </Provider>
  </React.StrictMode>,
)
