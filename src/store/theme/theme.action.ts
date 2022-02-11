import { LightOnAction, DarkOnAction, LIGHT, DARK } from './theme.types';

export const lightOn = (): LightOnAction => ({
  type: LIGHT,
  payload: { theme: 'LIGHT' },
});

export const darkOn = (): DarkOnAction => ({
  type: DARK,
  payload: { theme: 'DARK' },
});
