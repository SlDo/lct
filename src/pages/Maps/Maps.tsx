import React, { type FC } from 'react';

import image from '@assets/images/default.svg';
import { Header } from '@component/Header';
import { useAPI } from '@hooks/useAPI';
import { useInterval } from '@hooks/useInterval';
import { Layout } from '@layouts/Layout';
import { getAllCams } from '@lib/api';
import { type GetAllCamsRequest, type GetAllCamsResponse } from '@lib/api/rest/cams/all/types';
import { Map, Menu } from '@pages/Maps/components';
import { Styled } from '@pages/Maps/styled';

import 'react-spring-bottom-sheet/dist/style.css';

export const Maps: FC = () => {
  const { data, runRequest } = useAPI<
  GetAllCamsRequest,
  GetAllCamsResponse
  >({
    apiService: getAllCams as any
  }, { runOnMount: true });

  useInterval(() => {
    runRequest();
  }, 5 * 60 * 1000);

  return (
    <Layout header={<Header />}>
      <Styled.Container>
        <Menu cameras={data?.cams.map(({ id, address }) => ({ icon: image, id, address }))} />
        <Map placemarks={data?.cams} />
      </Styled.Container>
    </Layout>
  );
};
