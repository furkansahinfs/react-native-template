import i18next from 'i18next';

function getValueText(value: any) {
  if (typeof value === 'boolean') {
    if (value) {
      return i18next.t('boolean.true');
    } else {
      return i18next.t('boolean.false');
    }
  } else if (typeof value === 'number') {
    return value.toString();
  } else if (typeof value === 'string') {
    return value;
  } else {
    return '';
  }
}

export default getValueText;
