import { Navigate } from 'react-router';
import Home from '@/pages/home';
import Pay from '@/pages/pay';
import TestJs from '@/pages/testJs';

const routes = [
  { path: '/home', element: <Home /> },
  { path: '/pay', element: <Pay /> },
  { path: '/testjs', element: <TestJs /> },
  {
    path: '/',
    element: <Navigate to='/home' />
  }
  // {
  //   path: '/invoices',
  //   element: <Invoices />,
  //   children: [
  //     { path: ':id', element: <Invoice /> },
  //     { path: '/pending', element: <Pending /> },
  //     { path: '/complete', element: <Complete /> }
  //   ]
  // }
];

export default routes;
