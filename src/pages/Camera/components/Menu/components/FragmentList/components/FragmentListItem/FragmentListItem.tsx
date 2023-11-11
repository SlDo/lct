import React, { type FC } from 'react';

import { useTheme } from 'styled-components';

import { Flex, Icon, Text } from '@uiKit';

import { FlexDirection, FlexJustifyContent } from '@uiKit/Flex/types';
import { Images } from '@uiKit/Icon/constants/images';
import { IconSize } from '@uiKit/Icon/types';

import { COLORS } from '@lib/theme/constants';

import { Styled } from './styled';
import { type FragmentListItemProps } from './types';

export const FragmentListItem: FC<FragmentListItemProps> = ({ interval, onClick, color = '#F0F0F1', iconColor = COLORS.BASE_COLORS.DARK }) => {
  const theme = useTheme();

  return (
    <Styled.ListItem onClick={onClick} $color={color}>
      <Flex gap={theme.spacings.x16} direction={FlexDirection.ROW}>
        <Flex justifyContent={FlexJustifyContent.CENTER} direction={FlexDirection.COLUMN}>
          <Text fontWeight={600}>{interval}</Text>
        </Flex>
      </Flex>
      <Icon size={IconSize.X24} image={Images.INFO} color={iconColor} />
    </Styled.ListItem>
  );
};
