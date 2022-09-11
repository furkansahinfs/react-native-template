import { Toast } from '../../../components';
import { I18N } from '../../../locales/language';
import { SignupRequest } from '../../../api';
import { navigate } from '../../../navigation';
import { SignupProps } from '../../../interface';

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
    Toast(I18N.t('pages.signupPage.signupSuccessfull'), true);
    navigate('Login');
  }
}
