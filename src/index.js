import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import './index.scss';

const rootElement = document.getElementById('root');
let persistor = persistStore(store)

render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
          
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);