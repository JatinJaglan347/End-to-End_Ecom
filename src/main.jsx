import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landingpage from './components/Landingpage/Landingpage.jsx';
import Itemdisplay from './components/Products/Itemdisplay.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landingpage />,
  },
  {
    path: ':category',
    element: <Itemdisplay />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Itemdisplay/> */}
  </React.StrictMode>,
);
