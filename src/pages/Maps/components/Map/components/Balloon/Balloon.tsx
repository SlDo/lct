import React, { type FC } from 'react';

import { Flex, Heading, Spacer, Text } from '@uiKit';

import { FlexDirection } from '@uiKit/Flex/types';
import { HeadingSize, HeadingType } from '@uiKit/Heading/types';

import { theme } from '@lib/theme';
import { SPACINGS } from '@lib/theme/constants';

import { Styled } from './styled';

export const Balloon: FC = () => {
  return (
    <Styled.Wrapper>
      <Flex direction={FlexDirection.COLUMN}>
        <Heading type={HeadingType.H3} size={HeadingSize.SM}>Камера {'{{properties.balloonCameraId}}'}</Heading>
        <Text color={theme.colors.base.grey['400']}>{'{{properties.balloonDescription}}'}</Text>
      </Flex>
      <Spacer space={SPACINGS.X32} />
      <Flex gap={SPACINGS.X8}>
        <Styled.Image src='{{properties.balloonImage}}' />
        <Styled.Link href={'/camera/' + '{{properties.balloonCameraId}}'}>Перейти к камере</Styled.Link>
      </Flex>
    </Styled.Wrapper>
  );
};
