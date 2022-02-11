export const LANGUAGE_ADD = 'language/add';
export const LANGUAGE_CLEAR = 'language/clear';

export type LanguageState = {
  language: string;
};

export interface LanguageAddAction {
  type: typeof LANGUAGE_ADD;
  payload: { language: string };
}

export interface LanguageClearAction {
  type: typeof LANGUAGE_CLEAR;
}

export type LanguageAction = LanguageAddAction | LanguageClearAction;
