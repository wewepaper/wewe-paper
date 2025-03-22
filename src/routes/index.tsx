import Layout from '@/components/layout/Layout';
import Home from '@/views/Home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'about', element: <About /> },
      // { path: 'contact', element: <Contact /> },
      // { path: '*', element: <NotFound /> }
    ],
  },
]);
