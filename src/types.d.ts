type Simplify<T> = {
  [P in keyof T]: T[P]
}
declare type SetOptional<T, K extends keyof T> = Simplify<
  Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>
>
declare type SetRequired<T, K extends keyof T> = Simplify<
  Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>
>
/** 
  * ⬇️ 现在element的FormRule
  * 
  * type?: RuleType;
  * required?: boolean;
  * pattern?: RegExp | string;
  * min?: number;
  * max?: number;
  * len?: number;
  * enum?: Array<string | number | boolean | null | undefined>;
  * whitespace?: boolean;
  * fields?: Record<string, Rule>;
  * options?: ValidateOption;
  * defaultField?: Rule;
  * transform?: (value: Value) => Value;
  * message?: string | ((a?: string) => string);
  * 
*/

type RuleType = 'string' | 'number' | 'boolean' | 'method' | 'regexp' | 'integer' | 'float' | 'array' | 'object' | 'enum' | 'date' | 'url' | 'hex' | 'email' | 'pattern' | 'any';
export interface BaseOption<T = any> {
  min?: number
  max?: number
  len?: number
  type?: RuleType
  name?: string
  trigger?: Arrayable<string>
  required?: boolean
  pattern?: RegExp | string
  message?: string
  asyncValidator?: (rule: any, value: T, callback: (error?: string | Error) => void, source: T, options: any) => any
  validator?: (rule: any, value: T, callback: (error?: string | Error) => void, source: T, options: any) => any
}

export type StringOption = SetRequired<BaseOption<string>, 'name'>

export interface SelectOption extends BaseOption<string | string[]> {
  multiple?: boolean
}
export interface MobileOption extends Omit<BaseOption<string>, 'max' | 'min' | 'len'> {
  level?: 'loose' | 'medium' | 'strict'
}

export type TelOption = Omit<BaseOption<string>, 'max' | 'min' | 'len'>

export interface CreateFn {
  (option: BaseOption): BaseOption | boolean
}

export interface CreateMessageFn {
  (
    message?: string,
    name?: string | boolean,
    sup?: string | boolean,
  ): string
}

export interface CreateRequiredMessageFn {
  (
    message?: string,
    name?: string | boolean,
    sup?: string | boolean,
    type?: string
  ): string
}

export type PasswordOption = Omit<BaseOption<string>, 'max' | 'min' | 'len'>
