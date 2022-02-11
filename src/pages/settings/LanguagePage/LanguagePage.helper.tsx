import { loadLanguageToRedux, setLanguage } from '../../../helpers';
/**
 * Set the selected language to the AsyncStorage,
 * load to the redux
 * and navigate user to the splash screen again.
 * @param language = selected language
 * @param navigation = useNavigation()
 * @param page = page name
 */
export async function adjust(language: string, navigation: any, page: string) {
  // Set language to the AsyncStorage
  await setLanguage(language);
  // Load language to the redux
  await loadLanguageToRedux();
  navigation.reset({
    index: 0,
    routes: [{ name: page }],
  });
}
