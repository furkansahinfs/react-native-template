import {
  AuthAddDeviceAction,
  AuthAddTokenAction,
  AuthClearAction,
  AuthRemoveTokenAction,
  AUTH_ADD_DEVICE,
  AUTH_ADD_TOKEN,
  AUTH_CLEAR,
  AUTH_REMOVE_TOKEN,
} from './auth.types';

export const authAddToken = (access_token: string): AuthAddTokenAction => ({
  type: AUTH_ADD_TOKEN,
  payload: { access_token },
});

export const authAddDevice = (deviceid: string): AuthAddDeviceAction => ({
  type: AUTH_ADD_DEVICE,
  payload: { deviceid },
});

export const authClear = (): AuthClearAction => ({
  type: AUTH_CLEAR,
});

export const authRemoveToken = (): AuthRemoveTokenAction => ({
  type: AUTH_REMOVE_TOKEN,
});
