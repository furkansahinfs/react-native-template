import { createAction } from '@reduxjs/toolkit';
import { AUTH_ADD_DEVICE, AUTH_ADD_TOKEN, AUTH_CLEAR, AUTH_REMOVE_TOKEN } from './auth.types';

export const authAddToken = createAction(AUTH_ADD_TOKEN, function prepare(refresh_token: string) {
  return {
    payload: { refresh_token },
  };
});

export const authAddDevice = createAction(AUTH_ADD_DEVICE, function prepare(deviceid: string) {
  return {
    payload: { deviceid },
  };
});

export const authClear = createAction(AUTH_CLEAR, function prepare() {
  return {
    payload: {
      refresh_token: '',
      deviceid: '',
    },
  };
});

export const authRemoveToken = createAction(AUTH_REMOVE_TOKEN, function prepare() {
  return {
    payload: { refresh_token: '' },
  };
});
