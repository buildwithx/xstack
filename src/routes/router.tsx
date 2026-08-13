import HomePage from '@/app/home/home-page';
import App from '@/app/shell/app';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
