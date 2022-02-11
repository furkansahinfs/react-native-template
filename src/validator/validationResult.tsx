/**
 * The function tries to validate email and return result
 * @param email email string
 * @returns validation result : boolean
 */
const ValidationResult = (errorMessage: string, result: boolean) => {
  return {
    result: result,
    errorMessage: errorMessage,
  };
};

export default ValidationResult;
