export function getKeysFromObject(myObj: object): string {
  //TODO update function name
  let keys: string[] = Object.keys(myObj);
  return keys.join(", ");
}

export function formatKeyValuesFromObject(myObj: object): string {
  let values: string[] = Object.values(myObj);
  return values.join(", ");
}
