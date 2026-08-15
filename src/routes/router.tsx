import ProtectedRoute from '@/components/protected-route';
import RootLayout from '@/layouts/root-layout';
import HomePage from '@/pages/home';
import NotFoundPage from '@/pages/not-found';
import SignInPage from '@/pages/sign-in';
import SignUpPage from '@/pages/sign-up';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
        ],
      },
      {
        path: '/sign-in/*',
        element: <SignInPage />,
      },
      {
        path: '/sign-up/*',
        element: <SignUpPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
