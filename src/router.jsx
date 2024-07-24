import { createBrowserRouter } from 'react-router-dom';
import {
  AddCardPage,
  HomePage,
  MyPage,
  ViewCardPage,
  OnBoardingPage,
  LoginPage,
  EmailLoginPage,
  MyPageEdit,
  FindIdPwPage,
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
  {
    path: '/login/email',
    element: <EmailLoginPage />,
  },
  {
    path: '/login/find-id',
    element: <FindIdPwPage />,
  },
  {
    path: '/login/find-pw',
    element: <FindIdPwPage />,
  },
  {
    path: '/mypage/edit',
    element: <MyPageEdit />,
  },
]);

export default router;
