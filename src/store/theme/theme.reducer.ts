import { ThemeAction, ThemeState, DARK, LIGHT } from './theme.types';

const initialState: ThemeState = { theme: 'LIGHT' };

export default function themeReducer(state = initialState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case DARK:
      return { ...state, ...action.payload };
    case LIGHT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
