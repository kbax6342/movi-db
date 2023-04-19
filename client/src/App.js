import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Search from './pages/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import './App.css';
import Genre from './pages/Genre/Genre';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'


const Layout = () => {
  return (
    <div className='app'>
      <Outlet />
    </div>
  );
};

const LayoutHome = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

const LayoutSearch = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Footer />
    </div>
  );
} 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/home',
        element: <LayoutHome />,
      },

      {
        path: '/search/:id',
        element: <LayoutSearch />,
      },
      {
        path: '/details/:id',
        element: <Details />,
      },
      {
        path: '/genre/:id',
        element: <Genre />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
]);
function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
