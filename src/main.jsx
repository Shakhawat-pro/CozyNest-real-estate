import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Root from './components/root/Root';
import Resident from './components/residents/Resident';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import Contact from './components/contact/Contact';
import AuthProviders from './providers/AuthProviders';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import SoloCard from './components/soloCard/SoloCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/house.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/residents',
        element:<Resident></Resident>,
        loader: () => fetch('/house.json')
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/soloHouse/:id',
        element: <PrivateRoute><SoloCard></SoloCard></PrivateRoute>,
        loader: () => fetch('/house.json')

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
        <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
);
