import React, { type ChangeEvent, type FC, useMemo, useState } from 'react';

import { BottomSheet } from 'react-spring-bottom-sheet';

import { Input } from '@uiKit';

import { CameraListItem } from '@pages/Maps/components/Menu/components/CameraList/components';
import { ROUTES } from '@router/routes/constants';

import { Styled } from './styled';
import { type MapsMenuBottomSheetProps } from './types';

export const MapsMenuBottomSheet: FC<MapsMenuBottomSheetProps> = ({ cameraList }) => {
  const [search, setSearch] = useState('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const cameras = useMemo(() => (cameraList.filter(({ address, id }) => address.search(search) !== -1 || id === parseInt(search))), [cameraList]);

  return (
    <BottomSheet
      open
      blocking={false}
      snapPoints={({ maxHeight }) => [
        maxHeight / 4,
        maxHeight * 0.6
      ]}
      header={<Input value={search} placeholder='Поиск' onChange={onChangeInput} />}
    >
      <Styled.Content>
        <Styled.List>
          {cameras.map(({ id, icon, address }) => <Styled.ListLink key={id}
                                                                   to={ROUTES.camera.path.replace(':id', String(id))}><CameraListItem
            icon={icon} id={id} address={address} /></Styled.ListLink>)}
        </Styled.List>
      </Styled.Content>
    </BottomSheet>
  );
};
