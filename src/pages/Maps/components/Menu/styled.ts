import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CameraList } from '@pages/Maps/components/Menu/components';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: calc(100% - ${({ theme }) => theme.spacings.x28 * 4}px);
  width: 400px;
  left: ${({ theme }) => theme.spacings.x28}px;
  top: ${({ theme }) => theme.spacings.x28}px;
  background: ${({ theme }) => theme.colors.base.light};
  padding: ${({ theme }) => theme.spacings.x16}px;
  z-index: 10000;
  border-radius: ${({ theme }) => theme.radiuses.md}px;
`;

const List = styled(CameraList)`
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const ListLink = styled(Link)`
  text-decoration: none;
`;

export const Styled = {
  MenuWrapper,
  List,
  ListLink
};
