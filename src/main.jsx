import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ProductDetails from './Components/ProductDetails.jsx/ProductDetails.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>, 
    children: [
      {
        path: '/', 
        element: <Home></Home>
      }, 
      {
        path:'product/:productId', 
        element: <ProductDetails></ProductDetails>,
        loader:()=> fetch('/gadgetsData.json')
      },
      {
        path:'/dashboard', 
        element: <Dashboard></Dashboard>
      }, 
      {
        path:'/about-us', 
        element: <AboutUs></AboutUs>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
