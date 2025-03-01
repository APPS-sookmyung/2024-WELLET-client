import { Global, css } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Layout } from './components';
import './index.css';
import router from './router';
import { pretendardFont, resetStyles, welletStyles } from './styles';

const queryClient = new QueryClient();
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
      <Layout />
    </RouterProvider>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
