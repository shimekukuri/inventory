import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout/Layout';
import { UpcScanner } from './pages/upcScanner/UpcScan';

import './index.css';
import Test from './pages/test/Test';
import Test2 from './pages/test/Test2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'upcScanner',
        element: <UpcScanner />,
      },
      {
        path: 'test',
        element: <Test />,
        children: [{ path: 'test2/:id', element: <Test2 /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
