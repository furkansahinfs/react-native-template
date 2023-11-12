import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from '@src/api';
import { i18next } from '@src/locales';
import store from '@src/store';
import { languageAdd, languageClear } from '@src/store/language';

/**
 * Get the language from Redux
 */
export function getLanguage() {
  return store.getState().language.language;
}

/**
 * That function runs at first load of app / after language selection process
 * Get the language from AsyncStorage and load to the redux
 *
 */
export async function loadLanguageToRedux() {
  try {
    const language = await AsyncStorage.getItem('LANGUAGE');
    API.setLanguage(language || ''); // set api language
    i18next.language = language || ''; // set I18N locale
    if (language) {
      store.dispatch(languageAdd(language)); // Update language from reducer
    } else {
      store.dispatch(languageClear()); // Update language from reducer
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Get the language as parameter
 * Save it to the AsyncStorage
 *
 * @param language = selected languagae
 */
export async function setLanguage(language: string) {
  try {
    await AsyncStorage.setItem('LANGUAGE', language);
  } catch (error) {
    console.log(error);
  }
}

export default getLanguage;
