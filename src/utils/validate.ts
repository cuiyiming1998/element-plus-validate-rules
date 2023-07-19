export interface ValidationFn<T = any> {
  (_: any, value: T, callback: Fn): any
}
