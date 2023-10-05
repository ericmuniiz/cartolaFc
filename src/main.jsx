import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Jogadores from './Jogadores';
import Home from "./Home";

// Define as páginas (rotas) do projeto
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Jogadores/:id",
    element: <Jogadores/>
  }
  
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)