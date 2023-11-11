import React, { type ChangeEvent, type FC, useMemo, useState } from 'react';

import { useTheme } from 'styled-components';

import { Flex, Input, Spacer, Spinner } from '@uiKit';

import { FlexJustifyContent } from '@uiKit/Flex/types';

import { useBreakpoint } from '@hooks/useBreakpoint';
import { CameraListItem } from '@pages/Maps/components/Menu/components/CameraList/components';
import { type MenuProps } from '@pages/Maps/components/Menu/types';
import { ROUTES } from '@router/routes/constants';

import { MapsMenuBottomSheet } from './components/MapsMenuBottomSheet';
import { Styled } from './styled';

export const Menu: FC<MenuProps> = ({ cameras }) => {
  const theme = useTheme();
  const isMobile = useBreakpoint(theme.breakpoints.mobile);
  const [search, setSearch] = useState('');

  const cameraList = useMemo(() => (cameras?.filter(({ address, id }) => address.search(search) !== -1 || id === parseInt(search))), [search, cameras]);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <>
      {!isMobile ? <Styled.MenuWrapper>
        <Input value={search} placeholder='Поиск' onChange={onChangeInput} />
        <Spacer space={theme.spacings.x36} />
        {cameraList?.length === 0 || !cameraList ? <Flex fullWidth justifyContent={FlexJustifyContent.CENTER}><Spinner /></Flex> : (
            <Styled.List>
              {cameraList?.map(({ id, icon, address }) => <Styled.ListLink key={id} to={ROUTES.camera.path.replace(':id', String(id))}><CameraListItem
                icon={icon} id={id} address={address} /></Styled.ListLink>)}
            </Styled.List>
        )}
      </Styled.MenuWrapper> : <MapsMenuBottomSheet cameraList={cameraList} />}
    </>
  );
};
