import { LanguageAction, LanguageState, LANGUAGE_ADD, LANGUAGE_CLEAR } from './language.types';

const initialState: LanguageState = { language: '' };

export default function languageReducer(
  state = initialState,
  action: LanguageAction,
): LanguageState {
  switch (action.type) {
    case LANGUAGE_CLEAR:
      return { ...initialState };
    case LANGUAGE_ADD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
