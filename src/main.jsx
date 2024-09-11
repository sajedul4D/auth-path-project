import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Rout.jsx'
import Provider from './AuthProvider/Provider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

 <Provider><RouterProvider router={router}></RouterProvider></Provider>

  </StrictMode>,
)
