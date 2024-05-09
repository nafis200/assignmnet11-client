import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Mybookings from './components/Mybookings';
import Authprovider from './components/Authprovider';
import Privateroute from './components/Privateroute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
           path:'/',
           element:<Home></Home>
        },
        {
           path:'/login',
           element:<Login></Login>
        },
        {
           path:'/registration',
           element: <Registration></Registration>
        },
        {
           path: '/bookings',
           element: <Privateroute><Mybookings></Mybookings></Privateroute>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl container mx-auto'>
   <React.StrictMode>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
  </React.StrictMode>,
  </div>
)
