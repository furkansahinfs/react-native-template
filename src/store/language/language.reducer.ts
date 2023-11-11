import { createReducer } from '@reduxjs/toolkit';
import { languageAdd, languageClear } from './language.action';
import { LanguageState } from './language.types';

const initialState: LanguageState = { language: '' };

export const languageReducer = createReducer(initialState, builder => {
  builder
    .addCase(languageAdd, (state, action) => {
      state.language = action.payload.language;
    })
    .addCase(languageClear, (state, action) => {
      state.language = action.payload.language;
    })
    .addDefaultCase((state, action) => {
      state = action.payload;
    });
});
