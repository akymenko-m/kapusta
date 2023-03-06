import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { App } from 'components/App';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider> */}
     <Global styles={GlobalStyles} />
     <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
