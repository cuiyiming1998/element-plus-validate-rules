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

export type StringOption = BaseOption<string>
export interface SelectOption extends BaseOption<string | string[]> {
  multiple?: boolean
}
export interface MobileOption extends StringOption {
  level?: 'loose' | 'medium' | 'strict'
}

export interface CreateFn {
  (option: BaseOption): Recordable | boolean
}
