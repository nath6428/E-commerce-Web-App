import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Products from "./components/Products.jsx";

const Router = () => {

    const router = createBrowserRouter([
        
        {
            path: "/",
            element: <App />,
    
        },

        {
            path: "/products",
            element: <Products />,
    
        },

        {
            path: "/contact-us",
            element: <App />,
    
        },

        {
            path: "/cart",
            element: <App />,
    
        }
    
    ])

    return <RouterProvider router = {router} />



}

export default Router