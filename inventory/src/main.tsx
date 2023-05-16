import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout/Layout';
import { UpcScanner } from './pages/upcScanner/UpcScan';
import TransferInventory from './pages/transfer/TransferInventory';

import './index.css';
import Test from './pages/test/Test';
import Test2 from './pages/test/Test2';
import Item, { itemLoader } from './pages/item/Item';
import DrawerProvider from './context/drawerContext/DrawerContext';

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
        path: 'location/:location/item/:upc',
        element: <Item />,
        children: [{ path: 'test2/:id', element: <Test2 /> }],
        loader: itemLoader,
      },
      {
        path: 'transferInventory',
        element: <TransferInventory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DrawerProvider>
      <RouterProvider router={router} />
    </DrawerProvider>
  </React.StrictMode>
);
