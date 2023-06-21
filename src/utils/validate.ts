export interface ValidationFn<T = any> {
  (_: any, value: T, callback: Fn): any
}

export const vMobile: ValidationFn<string> = function (
  _: any,
  value: string,
  callback: Fn,
) {
  const reg = /^(?:0|86|\+86)?1[3-9]\d{9}$/
  if (!reg.test(value))
    return callback(new Error('手机号有误'))

  return callback()
}
