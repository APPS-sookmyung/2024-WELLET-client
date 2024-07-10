import { createBrowserRouter } from 'react-router-dom';
import {
  AddCardPage,
  HomePage,
  MyPage,
  ViewCardPage,
  OnBoardingPage,
  LoginPage,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <OnBoardingPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/card/add',
    element: <AddCardPage />,
  },
  {
    path: '/card',
    element: <ViewCardPage />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
