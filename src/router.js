import { createBrowserRouter } from 'react-router-dom';
import { HomePage, MyPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
]);

export default router;
