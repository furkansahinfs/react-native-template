import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { BRANCH } from '@env';
import { loadLanguageToRedux, loadThemeToRedux } from './src/helpers';

console.log('branch=' + BRANCH);

async function loadToRedux() {
  await loadThemeToRedux();
  await loadLanguageToRedux();
}

AppRegistry.registerRunnable(appName, async (initialProps) => {
  try {
    await loadToRedux();
    AppRegistry.registerComponent(appName, () => App);
    AppRegistry.runApplication(appName, initialProps);
  } catch (err) {
    console.log(err);
  }
});
