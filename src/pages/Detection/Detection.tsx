import React, { type ChangeEvent, type FC, useMemo, useState } from 'react';

import Zoom from 'react-medium-image-zoom';
import { useTheme } from 'styled-components';

import { Button, Flex, Heading, Icon, Spacer, Spinner, Text } from '@uiKit';

import { ButtonVariant } from '@uiKit/Button/types';
import { FlexAlignItems, FlexDirection, FlexJustifyContent } from '@uiKit/Flex/types';
import { HeadingSize, HeadingType } from '@uiKit/Heading/types';
import { Images } from '@uiKit/Icon/constants/images';
import { IconSize } from '@uiKit/Icon/types';
import { TextSize } from '@uiKit/Text/types';
import { Textarea } from '@uiKit/Textarea';

import { BackButton } from '@component/BackButton';
import { Card } from '@component/Card';
import { useAPI } from '@hooks/useAPI';
import { useBreakpoint } from '@hooks/useBreakpoint';
import { useInterval } from '@hooks/useInterval';
import { PageLayout } from '@layouts/PageLayout';
import { addFile, getFileActions } from '@lib/api/rest/files';
import { type AddFileRequest, type AddFileResponse } from '@lib/api/rest/files/add/types';
import { type GetFileActionsRequest, type GetFileActionsResponse } from '@lib/api/rest/files/getFileActions/types';
import { RADIUSES } from '@lib/theme/constants';

import { Menu } from './components';
import { Styled } from './styled';

import 'react-medium-image-zoom/dist/styles.css';

export const Detection: FC = () => {
  const theme = useTheme();
  const isMobile = useBreakpoint(theme.breakpoints.mobile);
  const isMobileSmall = useBreakpoint(theme.breakpoints.mobile_small);
  const [videoName, setVideoName] = useState('');
  const [selectedAction, setSelectedAction] = useState<number | null>(null);

  const { data, runRequest } = useAPI<
  AddFileRequest,
  AddFileResponse
  >({
    apiService: addFile as any
  });

  const { data: fragmentsData, runRequest: getFragments } = useAPI<
  GetFileActionsRequest,
  GetFileActionsResponse
  >({
    apiService: getFileActions as any
  });

  useInterval(() => {
    if (data?.id) {
      getFragments({ file_id: data?.id });
    }
  }, data?.id ? 5000 : undefined);

  const onUploadVideo = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];

    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files?.[0] as Blob);
    const name = file?.name;
    setVideoName(name ? name.length > 30 ? name.slice(0, 30) + '...' : name : '');

    if (file) runRequest({ file });
  };

  const selectedFragment = useMemo(() => fragmentsData?.actions.find(({ id }) => id === selectedAction), [selectedAction, fragmentsData?.actions]);

  const onActionClick = (id: number) => {
    setSelectedAction(id);
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
                <Heading size={HeadingSize.DF}>Детекция</Heading>
              </Flex>
            </Styled.Head>
            {selectedFragment?.frame ? (
              <Zoom zoomMargin={theme.spacings.x32}>
                <Styled.FragmentImage style={{ height: isMobile ? '300px' : '900px', width: '100%' }} alt={selectedFragment?.comment ?? ''} images={[{ type: 'jpeg', image: `data:image/jpeg;base64,${selectedFragment?.frame ?? ''}` }]} radius={theme.radiuses.df} />
              </Zoom>
            ) : (
              <Flex fullWidth alignItems={FlexAlignItems.CENTER} justifyContent={FlexJustifyContent.CENTER} style={{ background: 'white', borderRadius: RADIUSES.MEDIUM + 'px', width: '100%', height: isMobile ? '300px' : '900px' }}>
                {(fragmentsData?.actions.length === 0 || !fragmentsData?.actions) && data?.id ? <Spinner /> : <Text size={TextSize.M2}>Для начала загрузите ролик</Text>}
              </Flex>
            )}
          </Flex>
          <Styled.Container fullHeight gap={theme.spacings.x48} direction={isMobile ? FlexDirection.COLUMN_REVERSE : FlexDirection.COLUMN}>
            {isMobile && <Spacer space={theme.spacings.x48} />}
            <Button fullWidth={isMobileSmall} variant={ButtonVariant.PRIMARY}>Ошибка нейросети</Button>
            <Menu onActionClick={onActionClick} actions={fragmentsData?.actions} />
            {selectedFragment?.comment && (
              <Card>
                <Heading size={HeadingSize.SM} type={HeadingType.H3}>Описание</Heading>
                <Spacer space={theme.spacings.x24} />
                <Textarea readOnly fullWidth value={selectedFragment.comment} placeholder='Здесь будет описание' />
              </Card>
            )}
            <Flex alignItems={FlexAlignItems.CENTER} direction={FlexDirection.COLUMN} gap={theme.spacings.x8}>
              <Styled.FileUploadButton>
                <input accept="video/mp4,video/x-m4v,video/*" type='file' name='videoFile' hidden onChange={onUploadVideo} />
                <Flex gap={theme.spacings.x16} alignItems={FlexAlignItems.CENTER}>
                  Загрузить видео
                  <Icon size={IconSize.X24} image={Images.FILE} />
                </Flex>
              </Styled.FileUploadButton>
              <Text>{videoName}</Text>
            </Flex>
          </Styled.Container>
        </Flex>
        <Spacer space={theme.spacings.x48} />
      </PageLayout>
    </>
  );
};
