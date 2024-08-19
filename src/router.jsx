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
  CardDetailPage,
  DetailEditPage,
  MyPageEditPage,
} from './pages';
import { Layout } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <OnBoardingPage />
      </Layout>
    ),
  },
  {
    path: '/home',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/card/add',
    element: (
      <Layout>
        <AddCardPage />
      </Layout>
    ),
  },
  {
    path: '/card',
    element: (
      <Layout>
        <ViewCardPage />
      </Layout>
    ),
  },
  {
    path: '/mypage',
    element: (
      <Layout>
        <MyPage />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
  },
  {
    path: '/login/find-id',
    element: (
      <Layout>
        <FindIdPwPage />
      </Layout>
    ),
  },
  {
    path: '/login/find-pw',
    element: (
      <Layout>
        <FindIdPwPage />
      </Layout>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <Layout>
        <SignUpPage />
      </Layout>
    ),
  },
  {
    path: '/mypage/edit',
    element: (
      <Layout>
        <MyPageEditPage />
      </Layout>
    ),
  },
  {
    path: '/card/:id',
    element: (
      <Layout>
        <CardDetailPage />
      </Layout>
    ),
  },
  {
    path: '/card/:id/edit',
    element: (
      <Layout>
        <DetailEditPage />
      </Layout>
    ),
  },
]);

export default router;
