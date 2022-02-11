import { combineReducers } from 'redux';
import { authReducer } from './auth/';
import { languageReducer } from './language/';
import { themeReducer } from './theme/';

export default combineReducers({
  language: languageReducer,
  theme: themeReducer,
  userCredentials: authReducer,
});
