import i18next from 'i18next';
import { SignupRequest } from 'src/api';
import { Toast } from 'src/components';
import { SignupProps } from 'src/interface';
import { navigate } from 'src/navigation';

/**
 * The function requests to the API to register user.
 * If register is successful, view a Toast message.
 * Else view a Toast message that includes error message of response
 * @param json : SignupProps
 */
export async function register(json: SignupProps) {
  const response: any = await SignupRequest(json);
  if (!response?.email) {
    Toast(response, true);
  } else {
    Toast(i18next.t('pages.signupPage.signupSuccessfull'), true);
    navigate('Login');
  }
}
