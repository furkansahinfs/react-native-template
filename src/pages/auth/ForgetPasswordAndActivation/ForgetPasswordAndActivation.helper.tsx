import { ForgetPasswordRequest, NewActivationRequest } from '@src/api';
import { Toast } from '@src/components';
import { i18next } from '@src/locales';

/**
 * If email is filled and ForgetPassword tab is selected, request to the server to reset password.
 * If email is filled and NewActivationMail tab is selected, request to the server to receive new activation mail.
 * After that display a Toast about process
 */
export async function send(email: string, selectedTab: string) {
  if (email) {
    if (selectedTab === 'ForgetPassword') {
      const response = await ForgetPasswordRequest(email);
      Toast(response.success ? response.data : response.error, false);
    } else {
      const response = await NewActivationRequest(email);
      Toast(response.success ? response.data : response.error, false);
    }
  } else {
    Toast(i18next.t('pages.forgetPasswordAndActiovationPage.emptyEmail'), false);
  }
}
