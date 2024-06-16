import { createBrowserRouter } from 'react-router-dom';

import { detectionRoutes } from '@router/routes/detection';
import { signInRoutes } from '@router/routes/signIn';

import { homeRoutes, cameraRoutes } from './routes';

export const router = createBrowserRouter([
  ...homeRoutes,
  ...cameraRoutes,
  ...detectionRoutes,
  ...signInRoutes
]);
