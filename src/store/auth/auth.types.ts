export const AUTH_ADD_TOKEN = 'auth/addToken';
export const AUTH_ADD_DEVICE = 'auth/addDevice';
export const AUTH_CLEAR = 'auth/clear';
export const AUTH_REMOVE_TOKEN = 'auth/removeToken';

export type AuthState = {
  refresh_token: string;
  deviceid: string;
};

export interface AuthAddTokenAction {
  type: typeof AUTH_ADD_TOKEN;
  payload: {
    refresh_token: string;
  };
}

export interface AuthAddDeviceAction {
  type: typeof AUTH_ADD_DEVICE;
  payload: {
    deviceid: string;
  };
}

export interface AuthClearAction {
  type: typeof AUTH_CLEAR;
}

export interface AuthRemoveTokenAction {
  type: typeof AUTH_REMOVE_TOKEN;
}

export type AuthAction =
  | AuthAddTokenAction
  | AuthAddDeviceAction
  | AuthClearAction
  | AuthRemoveTokenAction;
