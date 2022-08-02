import { assocPath } from 'ramda';

function ramdaObjectValueChange(gottenObj: any, pathStr: string, value: any) {
  return assocPath(pathStr.split('.'), value, gottenObj);
}

export default ramdaObjectValueChange;
