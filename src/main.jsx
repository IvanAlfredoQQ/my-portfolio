import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error from './components/Error'
import Admin from './components/Admin'

import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "admin",
        element: <Admin/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
