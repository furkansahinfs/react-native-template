/**
 * The function returns the index of given day name
 * @param day : given day name
 * @returns day index
 */

function getNumberOfDay(day: string) {
  const daysEn = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const daysTr = ['pazartesi', 'salı', 'çarşamba', 'perşembe', 'cuma', 'cumartesi', 'pazar'];
  return daysEn.indexOf(day.toLowerCase()) !== -1
    ? daysEn.indexOf(day.toLowerCase())
    : daysTr.indexOf(day.toLowerCase());
}

export default getNumberOfDay;
