import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Global, css } from '@emotion/react';
import { pretendardFont, resetStyles, welletStyles } from './styles';
import { Layout } from './components';

const App = () => (
  <>
    <Global
      styles={css`
        ${pretendardFont}
        ${resetStyles}
        ${welletStyles}
      `}
    />
    <RouterProvider router={router}>
      <Layout></Layout>
    </RouterProvider>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
