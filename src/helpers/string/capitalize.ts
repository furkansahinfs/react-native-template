function capitalize(str:string) {
  return str.length !== undefined && str.length > 0
    ? str.charAt(0).toUpperCase() + str.slice(1)
    : str;
}

export default capitalize;
