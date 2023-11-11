import { createReducer } from '@reduxjs/toolkit';
import { authAddDevice, authAddToken, authClear, authRemoveToken } from './auth.action';
import { AuthState } from './auth.types';

const initialState: AuthState = {
  refresh_token: '',
  deviceId: '',
};

export const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(authAddToken, (state, action) => {
      state.refresh_token = action.payload.refresh_token;
    })
    .addCase(authAddDevice, (state, action) => {
      state.deviceId = action.payload.deviceId;
    })
    .addCase(authRemoveToken, (state, action) => {
      state.refresh_token = action.payload.refresh_token;
    })
    .addCase(authClear, (state, action) => {
      state = action.payload;
    })
    .addDefaultCase((state, action) => {
      state = action.payload;
    });
});
