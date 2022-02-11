import {
  AuthAction,
  AuthState,
  AUTH_ADD_DEVICE,
  AUTH_ADD_TOKEN,
  AUTH_CLEAR,
  AUTH_REMOVE_TOKEN,
} from './auth.types';

const initialState: AuthState = {
  access_token: '',
  deviceid: '',
};

export default function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AUTH_CLEAR:
      return { ...initialState };
    case AUTH_REMOVE_TOKEN:
      return { ...state, access_token: '' };
    case AUTH_ADD_DEVICE:
      return { ...state, deviceid: action.payload.deviceid };
    case AUTH_ADD_TOKEN:
      return { ...state, access_token: action.payload.access_token };
    default:
      return state;
  }
}
