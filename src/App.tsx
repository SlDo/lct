import React, { type FC } from 'react';

import { RouterProvider } from 'react-router-dom';

import { router } from '@router/router';
import { GlobalStyle } from '@styles/globalStyles';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};
