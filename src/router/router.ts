import { createBrowserRouter } from 'react-router-dom';

import { detectionRoutes } from '@router/routes/detection';
import { signInRoutes } from '@router/routes/signIn';

import { mapsRoutes, cameraRoutes } from './routes';

export const router = createBrowserRouter([
  ...mapsRoutes,
  ...cameraRoutes,
  ...detectionRoutes,
  ...signInRoutes
]);
