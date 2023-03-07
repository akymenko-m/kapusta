import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { Global } from '@emotion/react';

import { GlobalStyles } from 'styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global styles={GlobalStyles} />




          <BrowserRouter   basename="/kapusta/"   >

         

          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// basename = '/kapusta/';
