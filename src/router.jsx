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
    element: <HomePage />,
  },
  {
    path: '/card/add',
    element: <AddCardPage />,
  },
  {
    path: '/card/view',
    element: <ViewCardPage />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
  {
    path: '/onboarding',
    element: <OnBoardingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
