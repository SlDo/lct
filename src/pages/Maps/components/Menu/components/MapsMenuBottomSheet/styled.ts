import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CameraList } from '@pages/Maps/components/Menu/components';

const Content = styled.div`
  padding: ${({ theme }) => theme.spacings.x24}px;
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
  Content,
  ListLink,
  List
};
