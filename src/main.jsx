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
import Assignment from './components/Assignment';
import Errorelement from './Errorelement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Errorelement></Errorelement>,
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
        },
        {
           path:'/assignment',
           element:<Assignment></Assignment>
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
