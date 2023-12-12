import { createHashRouter } from 'react-router-dom';
import { HomePage } from '../page';
import { SongPage } from '../page/song';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/songs',
    element: <SongPage />,
  },
]);

export default router;
