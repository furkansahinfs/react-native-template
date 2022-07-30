import { I18N } from '../../locales';

function getValueText(value: any) {
  if (typeof value === 'boolean') {
    if (value) {
      return I18N.t('boolean.true');
    } else {
      return I18N.t('boolean.false');
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
