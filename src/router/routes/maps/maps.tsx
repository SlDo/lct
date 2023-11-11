import React from 'react';

import { Maps } from 'pages/Maps';
import { type RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '@component/ProtectedRoute';

import { MAPS_ROUTE } from './constants';

export const mapsRoutes: RouteObject[] = [
  {
    path: MAPS_ROUTE.maps.path,
    element: (
        <ProtectedRoute>
          <Maps />
        </ProtectedRoute>
    )
  }
];
