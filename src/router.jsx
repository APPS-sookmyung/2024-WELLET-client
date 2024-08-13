import { createBrowserRouter } from 'react-router-dom';
import {
  AddCardPage,
  HomePage,
  MyPage,
  ViewCardPage,
  OnBoardingPage,
  LoginPage,
  SignUpPage,
  FindIdPwPage,
  MyPageEditPage,
  CardDetailPage,
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
    path: '/login/find-id',
    element: <FindIdPwPage />,
  },
  {
    path: '/login/find-pw',
    element: <FindIdPwPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/mypage/edit',
    element: <MyPageEditPage />,
  },
  {
    path: '/card/:id',
    element: <CardDetailPage />,
  },
]);

export default router;
