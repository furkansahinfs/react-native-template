import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/';
import { languageReducer } from './language/';
import { themeReducer } from './theme/';

export const reducer = combineReducers({
  language: languageReducer,
  theme: themeReducer,
  userCredentials: authReducer,
});
