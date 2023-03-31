import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "@fontsource/inter";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Example from './pages/Example';
import SalePoint from './pages/PuntoVenta/Index';
import Storage from './pages/Inventario/Index';
import AddProduct from './components/AddProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "example",
    element: <Example />
  },
  {
    path: "puntoVenta",
    element: <SalePoint />
  },
  {
    path: "/inventario",
    element: <Storage />
  },
  {
    path: "/addproduct",
    element: <AddProduct />
  },
  /*
   {
    path: '*',
    element: error 404,
  }, // este es para la pagina 404
   */
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
