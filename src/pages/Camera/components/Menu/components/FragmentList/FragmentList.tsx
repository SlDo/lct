import React, { type FC, type PropsWithChildren } from 'react';

import { Styled } from '@pages/Maps/components/Menu/components/CameraList/styled';

export const FragmentList: FC<PropsWithChildren> = ({ children, ...props }) => {
  return <Styled.List {...props}>{children}</Styled.List>;
};
