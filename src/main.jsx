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
import Errorelement from './Errorelement';
import Avatar from './components/Avatar';
import Create from './components/Create';
import Pending from './components/Pending';
import Myassignment from './components/Myassignment';
import Assi from './components/Assi';

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
           path:'/avatar',
           element:<Avatar></Avatar>,
        },
        {
           path:'/create',
           element:<Privateroute><Create></Create></Privateroute> ,
        },
        {
          path:'/pending',
          element:<Privateroute><Pending></Pending></Privateroute>
        },
        {
           path:'/my',
           element:<Privateroute><Myassignment></Myassignment></Privateroute>,
        },
        {
           path:'/assi',
           element:<Assi></Assi>
        }
        
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
  </React.StrictMode>

)
