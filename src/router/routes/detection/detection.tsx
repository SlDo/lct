import React from 'react';

import { type RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '@component/ProtectedRoute';
import { Detection } from '@pages/Detection';

import { DETECTION_ROUTE } from './constants';

export const detectionRoutes: RouteObject[] = [
  {
    path: DETECTION_ROUTE.detection.path,
    element: (
        <ProtectedRoute>
          <Detection />
        </ProtectedRoute>
    )
  }
];
