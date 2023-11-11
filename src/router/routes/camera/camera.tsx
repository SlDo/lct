import React from 'react';

import { type RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '@component/ProtectedRoute';
import { Camera } from '@pages/Camera';

import { CAMERA_ROUTE } from './constants';

export const cameraRoutes: RouteObject[] = [
  {
    path: CAMERA_ROUTE.camera.path,
    element: (
        <ProtectedRoute>
          <Camera />
        </ProtectedRoute>
    )
  }
];
