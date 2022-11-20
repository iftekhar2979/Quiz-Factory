import { createBrowserRouter } from 'react-router-dom';
import Error from '../Component/Error.js/Error';
import Topics from '../Component/Quiz/Topics';
import Root from '../Component/Root/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Topics></Topics>,
      },
    ],
  },
]);
