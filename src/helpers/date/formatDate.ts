/**
 * The function returns the string of the given date
 * according to the dd-mm-yyyy format
 * @param givenDate : given Date
 * @returns date string as dd-mm-yyyy
 */
function formatDate(givenDate: Date) {
  const date = new Date(givenDate);
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  let year = date.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return day + '/' + month + '/' + year;
}
export default formatDate;
