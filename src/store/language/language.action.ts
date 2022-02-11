import {
  LanguageAddAction,
  LanguageClearAction,
  LANGUAGE_ADD,
  LANGUAGE_CLEAR,
} from './language.types';

export const languageAdd = (language: string): LanguageAddAction => ({
  type: LANGUAGE_ADD,
  payload: { language },
});

export const languageClear = (): LanguageClearAction => ({
  type: LANGUAGE_CLEAR,
});
