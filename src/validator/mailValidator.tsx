import ValidationResult from './validationResult';
import { I18N } from '../locales/language';

/**
 * The function tries to validate email and return result
 * @param email email string
 * @returns validation result : object
 */
function validate(email: string) {
  let errorMessage = '';

  if (!email) {
    errorMessage += I18N.t('signupPage.emptyEmail') + '\n';
  }

  const isVaild = !errorMessage;

  return ValidationResult(errorMessage, isVaild);
}

export default validate;
