/**
 * Get all key names from an object
 * @param myObj
 * @returns A stringified version of all key names from myObj separated by commas
 */
export function getKeysFromObject(myObj: object): string {
  let keys: string[] = Object.keys(myObj);
  return keys.join(", ");
}

/**
 * Get all key values from an object
 * @param myObj
 * @returns A stringified version of all key values from myObj separated by commas
 */
export function getKeyValuesFromObject(myObj: object): string {
  if (myObj) {
    let values: string[] = Object.values(myObj);
    return values.join(", ");
  } else {
    return "";
  }
}
