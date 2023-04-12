
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Search from './pages/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home"
import Details from './pages/Details/Details';
import './App.css';

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search/:id',
        element: <Search />,
      },
      {
        path: '/details/:id',
        element: <Details />,
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
