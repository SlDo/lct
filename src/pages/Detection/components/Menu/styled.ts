import styled from 'styled-components';

import { Card } from '@component/Card';
import { FragmentList } from '@pages/Camera/components/Menu/components';

const MenuWrapper = styled(Card)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 900px;
`;

const List = styled(FragmentList)`
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Styled = {
  MenuWrapper,
  List
};
