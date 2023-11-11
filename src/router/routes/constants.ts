import { CAMERA_ROUTE } from '@router/routes/camera/constants';
import { DETECTION_ROUTE } from '@router/routes/detection/constants';
import { MAPS_ROUTE } from '@router/routes/maps/constants';
import { SIGNIN_ROUTE } from '@router/routes/signIn/constants';

export const ROUTES = {
  ...MAPS_ROUTE,
  ...CAMERA_ROUTE,
  ...DETECTION_ROUTE,
  ...SIGNIN_ROUTE
};
