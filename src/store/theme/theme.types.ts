export const DARK = 'theme/dark';
export const LIGHT = 'theme/light';

export type ThemeState = {
  theme: string;
};

export interface DarkOnAction {
  type: typeof DARK;
  payload: { theme: string };
}

export interface LightOnAction {
  type: typeof LIGHT;
  payload: { theme: string };
}

export type ThemeAction = DarkOnAction | LightOnAction;
