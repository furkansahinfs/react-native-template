import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '@src/store';
import { darkOn, lightOn } from '@src/store/theme';

/**
 * Get the theme from Redux
 */
export function getTheme() {
  return store.getState().theme.theme;
}

/**
 * That function runs at first load of app / after theme selection process
 * Get the theme from AsyncStorage and load to the redux
 *
 */
export async function loadThemeToRedux() {
  try {
    const theme = await AsyncStorage.getItem('THEME');
    if (theme === 'DARK') {
      store.dispatch(darkOn()); // Update theme from reducer
    } else {
      store.dispatch(lightOn()); // Update theme from reducer
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Get the theme as parameter
 * Save it to the AsyncStorage
 *
 * @param theme = selected theme
 */
export async function setTheme(theme: string) {
  try {
    await AsyncStorage.setItem('THEME', theme);
  } catch (error) {
    console.log(error);
  }
}

/**
 * The function change theme choice for Redux and AsyncStorage
 */
export async function changeTheme() {
  const reduxTheme = getTheme();
  const isDarkMode = reduxTheme === 'DARK';
  await setTheme(isDarkMode ? 'LIGHT' : 'DARK').then(async () => {
    await loadThemeToRedux();
  });
}
