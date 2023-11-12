import { createReducer } from '@reduxjs/toolkit';
import { darkOn, lightOn } from './theme.action';
import { ThemeState } from './theme.types';

const initialState: ThemeState = { theme: 'LIGHT' };

export const themeReducer = createReducer(initialState, builder => {
  builder
    .addCase(lightOn, (state, action) => {
      state.theme = action.payload.theme;
    })
    .addCase(darkOn, (state, action) => {
      state.theme = action.payload.theme;
    })
    .addDefaultCase((state, action) => {
      state = action.payload;
    });
});
