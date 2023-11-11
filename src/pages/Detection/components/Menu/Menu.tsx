import React, { type FC, useMemo } from 'react';

import { useTheme } from 'styled-components';

import { Heading, Spacer, Text } from '@uiKit';

import { HeadingSize, HeadingType } from '@uiKit/Heading/types';

import { FragmentListItem } from './components/FragmentList/components';
import { Styled } from './styled';
import { type MenuProps } from './types';

export const Menu: FC<MenuProps> = ({ actions, onActionClick }) => {
  const theme = useTheme();
  const actionList = useMemo(() => actions?.map(({ time_detected: timeDetected, id, precision }) => ({ interval: timeDetected, id, precision })), [actions]);

  return (
    <Styled.MenuWrapper>
      <Heading size={HeadingSize.SM} type={HeadingType.H3}>Видеофрагменты</Heading>
      <Spacer space={theme.spacings.x24} />
      {actionList?.length === 0 || !actionList ? <Text>Видеофрагменты отсутствуют</Text> : (
        <Styled.List>
          {actionList?.map(({ id, interval, precision }) => <FragmentListItem onClick={() => { onActionClick(id); }} key={id} interval={interval} color={precision < 0.9 ? '#FFEFB8' : '#EFCAC8'} iconColor={precision < 0.9 ? '#FFEFB8' : '#EFCAC8'} />)}
        </Styled.List>
      )}
    </Styled.MenuWrapper>
  );
};
