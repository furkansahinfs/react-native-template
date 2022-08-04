import { createAction } from '@reduxjs/toolkit';
import { LIGHT, DARK } from './theme.types';

export const lightOn = createAction(LIGHT, function prepare() {
  return {
    payload: { theme: 'LIGHT' },
  };
});

export const darkOn = createAction(DARK, function prepare() {
  return {
    payload: { theme: 'DARK' },
  };
});
