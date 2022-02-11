import ValidationResult from './validationResult';
import { I18N } from '../locales/language';

/**
 * The function tries to validate password and return result
 * @param password password string
 * @returns validation result : object
 */
function validate(password: string, confirmPassword: string) {
  let errorMessage = '';
  const isPasswordConfirmed = password === confirmPassword;

  if (!password) {
    errorMessage += I18N.t('signupPage.emptyPassword') + '\n';
  }

  if (!isPasswordConfirmed) {
    errorMessage += I18N.t('signupPage.confirmPasswordError') + '\n';
  }

  const isVaild = !errorMessage;

  return ValidationResult(errorMessage, isVaild);
}

export default validate;
