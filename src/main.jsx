import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import Navbar from './Navbar.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

// Define routing configuration
const router = createBrowserRouter([
  {
    path: "/", 
    element: (
      <>
        <Navbar /> 
        <div>Hello world!</div>
      </>
    ),
  },
  
]);

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);