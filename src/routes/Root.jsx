
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate 
} from "react-router-dom";
import App from '../App';
import ErrorPage from '../global/ErrorPage';
import Collection from '../pages/collection/Collection';
import Homepage from '../pages/homepage/Homepage';
import Shop from '../pages/shop/Shop';
import Product from '../global/product/Product';
import Checkout from '../pages/checkout/Checkout';


export default function Root() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, 
          element: <Navigate to="/homepage" replace /> 
        },
        {
          path: "homepage",
          element: <Homepage />,
        },
        {
          path: "collection",
          element: <Collection />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
            path: "checkout",
            element: <Checkout />,
        },
      ]
    },
  ]);
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>
    </>
  );
}