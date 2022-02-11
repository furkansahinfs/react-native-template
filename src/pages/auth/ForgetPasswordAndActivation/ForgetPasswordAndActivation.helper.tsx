import { Toast } from '../../../components';
import { I18N } from '../../../locales/language';
import { ForgetPasswordRequest, NewActivationRequest } from '../../../api/index';

/**
 * If email is filled and ForgetPassword tab is selected, request to the server to reset password.
 * If email is filled and NewActivationMail tab is selected, request to the server to receive new activation mail.
 * After that display a Toast about process
 */
export async function send(email: string, selectedTab: string) {
  if (email) {
    if (selectedTab === 'ForgetPassword') {
      const response: any = await ForgetPasswordRequest(email);
      Toast(response, false);
    } else {
      const response: any = await NewActivationRequest(email);
      Toast(response, false);
    }
  } else {
    Toast(I18N.t('forgetPasswordAndActiovationPage.emptyEmail'), false);
  }
}
