import React, { type FC, useState } from 'react';

import { renderToString } from 'react-dom/server';

import defaultImageIcon from '@assets/images/default.svg';
import defaultImage from '@assets/images/default_camera.svg';
import { Balloon } from '@pages/Maps/components/Map/components';
import { type MapProps } from '@pages/Maps/components/Map/types';
import { Map as YMap, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { type YMapsApi } from '@pbe/react-yandex-maps/typings/util/typing';

export const Map: FC<MapProps> = ({ placemarks }) => {
  const [balloon, setBalloon] = useState<any>({ template: undefined });

  return (
      <YMaps>
        <YMap instanceRef={(map) => {
          map?.events?.add('click', () => {
            map?.balloon?.close();
          });
        }} modules={['templateLayoutFactory']} onLoad={(api: YMapsApi) => {
          if (api) {
            const template = api.templateLayoutFactory?.createClass(renderToString(<Balloon />), {});

            setBalloon({ template });
          }
        }} width="100%" height="100%" state={{ center: [44.894818, 37.316367], zoom: 15 }}>
          {placemarks?.map(({ latitude, longitude, address, status, id }) => {
            return (
              <Placemark
                key={id}
                modules={['geoObject.addon.balloon']}
                geometry={[latitude, longitude]}
                options={{
                  iconLayout: 'default#image',
                  iconImageSize: [96, 96],
                  iconImageHref: defaultImage,
                  openBalloonOnClick: true,
                  balloonLayout: balloon.template
                }}
                properties={{
                  balloonCameraId: id,
                  balloonDescription: address,
                  balloonImage: defaultImageIcon
                }}
              />
            );
          })}
        </YMap>
      </YMaps>
  );
};
