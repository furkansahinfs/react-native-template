import { SignupRequest } from '@src/api';
import { Toast } from '@src/components';
import { SignupProps } from '@src/interface';
import { i18next } from '@src/locales';
import { navigate } from '@src/navigation';

/**
 * The function requests to the API to register user.
 * If register is successful, view a Toast message.
 * Else view a Toast message that includes error message of response
 * @param json : SignupProps
 */
export async function register(json: SignupProps) {
  const response = await SignupRequest(json);
  if (!response.success) {
    Toast(response.error as string, true);
  } else {
    Toast(i18next.t('pages.signupPage.signupSuccessfull'), true);
    navigate('Login');
  }
}
