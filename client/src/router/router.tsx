import { createHashRouter } from 'react-router-dom';
import { HomePage } from '../page';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export default router;
