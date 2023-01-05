export function isString(obj: any) {
  return Object.prototype.toString.call(obj) === '[object String]';
}
