import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../themes.js';

import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider>
        <ColorModeScript initialColorMode = {theme.config.initialColorMode}/>
        <App />
      </ChakraProvider>
    </PersistGate>
  </Provider>
)
