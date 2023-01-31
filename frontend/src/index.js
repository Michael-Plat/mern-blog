import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';

import { theme } from './theme';
import { store } from './redux/store';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </CssBaseline>
  </>,
);
