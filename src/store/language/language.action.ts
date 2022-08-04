import { createAction } from '@reduxjs/toolkit';
import { LANGUAGE_ADD, LANGUAGE_CLEAR } from './language.types';

export const languageAdd = createAction(LANGUAGE_ADD, function prepare(language: string) {
  return {
    payload: { language },
  };
});

export const languageClear = createAction(LANGUAGE_CLEAR, function prepare() {
  return {
    payload: { language: '' },
  };
});
