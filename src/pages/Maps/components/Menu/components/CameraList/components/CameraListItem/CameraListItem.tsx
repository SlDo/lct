import React, { type FC } from 'react';

import { useTheme } from 'styled-components';

import { Flex, Icon, Text } from '@uiKit';

import { FlexDirection, FlexJustifyContent } from '@uiKit/Flex/types';
import { Images } from '@uiKit/Icon/constants/images';
import { TextSize } from '@uiKit/Text/types';

import { Styled } from '@pages/Maps/components/Menu/components/CameraList/components/CameraListItem/styled';
import { type CameraListItemProps } from '@pages/Maps/components/Menu/components/CameraList/components/CameraListItem/types';

export const CameraListItem: FC<CameraListItemProps> = ({ id, icon, address }) => {
  const theme = useTheme();

  return (
    <Styled.ListItem>
      <Flex gap={theme.spacings.x16} direction={FlexDirection.ROW}>
        <Styled.Image src={icon} />
        <Flex justifyContent={FlexJustifyContent.CENTER} direction={FlexDirection.COLUMN}>
          <Text fontWeight={600}>Камера {id}</Text>
          <Text size={TextSize.S2} color={theme.colors.base.grey['400']}>{address}</Text>
        </Flex>
      </Flex>
      <Icon image={Images.ARROW_RIGHT} color={theme.colors.base.dark} />
    </Styled.ListItem>
  );
};
