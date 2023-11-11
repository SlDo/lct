import React, { type FC, useMemo, useState } from 'react';

import Zoom from 'react-medium-image-zoom';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Button, Flex, Heading, Spacer } from '@uiKit';

import { ButtonVariant } from '@uiKit/Button/types';
import { FlexAlignItems, FlexDirection, FlexJustifyContent } from '@uiKit/Flex/types';
import { HeadingSize, HeadingType } from '@uiKit/Heading/types';
import { Textarea } from '@uiKit/Textarea';

import { BackButton } from '@component/BackButton';
import { Modal } from '@component/Modal/Modal';
import { useAPI } from '@hooks/useAPI';
import { useBreakpoint } from '@hooks/useBreakpoint';
import { useInterval } from '@hooks/useInterval';
import { PageLayout } from '@layouts/PageLayout';
import { getActions, getCam } from '@lib/api';
import { type GetCamRequest, type GetCamResponse } from '@lib/api/rest/cams/get/types';
import { type GetActionsRequest, type GetActionsResponse } from '@lib/api/rest/cams/getActions/types';
import { Styled } from '@pages/Camera/styled';

import { Menu } from './components';

import 'react-medium-image-zoom/dist/styles.css';

export const Camera: FC = () => {
  const theme = useTheme();
  const [selectedAction, setSelectedAction] = useState<number | null>(null);
  const isMobile = useBreakpoint(theme.breakpoints.mobile);
  const isMobileSmall = useBreakpoint(theme.breakpoints.mobile_small);
  const [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();

  const { data } = useAPI<
  GetCamRequest,
  GetCamResponse
  >({
    apiService: getCam as any,
    requestData: {
      cam_id: String(id)
    }
  }, { runOnMount: true });

  const { data: fragmentsData, runRequest: getFragments } = useAPI<
  GetActionsRequest,
  GetActionsResponse
  >({
    apiService: getActions as any,
    requestData: {
      cam_id: parseInt(id ?? '0')
    }
  }, { runOnMount: true });

  console.table(data);

  const selectedFragment = useMemo(() => fragmentsData?.actions.find(({ id }) => id === selectedAction), [selectedAction, fragmentsData?.actions]);

  useInterval(() => {
    if (data?.id) {
      getFragments({ cam_id: data?.id });
    }
  }, data?.id ? 5000 : undefined);

  const onActionClick = (id: number) => {
    setSelectedAction(id);
    setIsOpen(true);
  };

  return (
    <>
      <PageLayout>
        <Spacer space={theme.spacings.x48} />
        <Flex gap={theme.spacings.x36} direction={isMobile ? FlexDirection.COLUMN : FlexDirection.ROW}>
          <Flex gap={theme.spacings.x48} flex='1' direction={FlexDirection.COLUMN}>
            <Styled.Head justifyContent={FlexJustifyContent.SPACE_BETWEEN} alignItems={FlexAlignItems.CENTER}>
              <Flex direction={isMobileSmall ? FlexDirection.COLUMN : FlexDirection.ROW} gap={isMobileSmall ? theme.spacings.x16 : theme.spacings.x64} alignItems={isMobileSmall ? FlexAlignItems.FLEX_START : FlexAlignItems.CENTER}>
                <BackButton />
                <Heading size={HeadingSize.DF}>Видеокамера {id}</Heading>
              </Flex>
            </Styled.Head>
            <ReactPlayer
              className="react-player"
              width='100%'
              height='900px'
              controls
              url="https://rtsp.onixx.ru/stream/camera4/index.m3u8"
              playing={true}
            />
          </Flex>
          <Flex fullHeight gap={theme.spacings.x48} direction={isMobile ? FlexDirection.COLUMN_REVERSE : FlexDirection.COLUMN}>
            {isMobile && <Spacer space={theme.spacings.x48} />}
            <Flex gap={theme.spacings.x24} direction={isMobileSmall ? FlexDirection.COLUMN : FlexDirection.ROW} justifyContent={FlexJustifyContent.SPACE_BETWEEN} alignItems={FlexAlignItems.CENTER}>
              <Button fullWidth={isMobileSmall} variant={ButtonVariant.PRIMARY}>Ошибка нейросети</Button>
              <Button fullWidth={isMobileSmall} variant={ButtonVariant.SECONDARY}>Вызвать сотрудника</Button>
            </Flex>
            <Menu onActionClick={onActionClick} actions={fragmentsData?.actions} />
          </Flex>
        </Flex>
        <Spacer space={theme.spacings.x24} />
      </PageLayout>
      <Modal
        title='Видеофрагмент'
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => { setIsOpen(false); }}
      >
        <Zoom zoomMargin={theme.spacings.x32}>
          <Styled.FragmentImage alt={selectedFragment?.comment ?? ''} images={[{ type: 'jpeg', image: `data:image/jpeg;base64,${selectedFragment?.frame ?? ''}` }]} radius={theme.radiuses.df} />
        </Zoom>
        <Spacer space={theme.spacings.x24} />
        <Heading size={HeadingSize.SM} type={HeadingType.H3}>Описание</Heading>
        <Spacer space={theme.spacings.x24} />
        <Textarea readOnly fullWidth placeholder='Описание происшествия' value={selectedFragment?.comment} />
      </Modal>
    </>
  );
};
