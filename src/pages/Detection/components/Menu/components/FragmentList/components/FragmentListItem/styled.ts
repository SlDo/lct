import styled from 'styled-components';

import {
  type FragmentListItemProps
} from '@pages/Camera/components/Menu/components/FragmentList/components/FragmentListItem/types';

const ListItem = styled.li<{ $color: FragmentListItemProps['color'] }>` 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.x16}px;
  background: ${({ $color }) => $color};
  border-radius: ${({ theme }) => theme.radiuses.df}px;
  padding: 13px 20px;
  box-sizing: border-box;
`;

export const Styled = {
  Image,
  ListItem
};
