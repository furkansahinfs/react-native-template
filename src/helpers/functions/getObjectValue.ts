function getObjectValue(obj: any, path: string) {
  const splittedFieldName = path.split('.');
  let elementValue: any = obj;
  splittedFieldName.forEach((field: string) => {
    elementValue = elementValue?.[field];
  });
  return elementValue;
}

export default getObjectValue;
