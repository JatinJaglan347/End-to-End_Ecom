import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landingpage from './components/Landingpage/Landingpage.jsx';
import Itemdisplay from './components/Products/Itemdisplay.jsx';
import './index.css';
import CategoriesContextProvider from './contexts/Categories/categories.jsx';
import RandomproductsContextProvider from './contexts/RandomProducts/Randomproducts.jsx';
import  Product  from './components/Products/Product.jsx';
import Test from './test.jsx'
import Layout from './Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '',
        element: <Landingpage />,
      },
      {
        path: '/category/:category',
        element: <Itemdisplay />,
      },
      {
        path: '/category/:category/product/:id/:title',
        element: <Product />,
      },
      {
        path: '/category/:category/product/:id/:title',
        element: <Product />,
      }
    ]
  },
  

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoriesContextProvider>
      <RandomproductsContextProvider>
        <RouterProvider router={router} />
      </RandomproductsContextProvider>
    </CategoriesContextProvider>
  </React.StrictMode>
);
