import type {
  BaseOption,
  CreateFn,
  CreateMessageFn,
  CreateRequiredMessageFn,
} from '../types.d'
import { assign } from './object'
import { isFakeValue } from './index'

export const createMessage: CreateMessageFn
= (
  message = '',
  name,
  sup,
) => {
  return message || `${name || ''}输入格式有误${sup ? `,${sup}` : ''}`
}
export const createRequiredMessage: CreateRequiredMessageFn = (
  message = '',
  name,
  sup,
  type,
) => {
  const map: Record<string, string> = {
    string: '输入',
    array: '选择',
  }

  const inputType = map[type || 'string']
  return message || `${sup || `请${inputType}`}${name || ''}`
}

export const createRequiredRule: CreateFn = (option) => {
  const { required, message, name, trigger, type } = option

  if (!required)
    return false

  const msg = createRequiredMessage(message, name, false, type)
  const rule = {
    required: true,
    message: msg,
    type,
    trigger,
  }
  return rule
}

export const createLengthRule: CreateFn = (option) => {
  const { len, message, name, trigger, type } = option

  const msg = createMessage(message, name, `长度需要为${len}`)

  if (isFakeValue(len))
    return false

  const rule = {
    len,
    message: msg,
    trigger: trigger || 'blur',
    type,
  }
  return rule
}

export const createRangeRule: CreateFn = (option) => {
  const { min, max, message, name, trigger, type } = option
  const hasMin = !isFakeValue(min)
  const hasMax = !isFakeValue(max)

  let sup = ''
  if (!hasMin && !hasMax)
    return false
  else if (hasMin && !hasMax)
    sup = `长度最少为${min}个字符`
  else if (!hasMin && hasMax)
    sup = `长度不超过${max}个字符`
  else if (hasMin && hasMax)
    sup = `长度需要在${min}和${max}个字符之间`

  const msg = createMessage(message, name, sup)

  const rule = {
    min,
    max,
    message: msg,
    trigger: trigger || 'blur',
    type,
  }
  return rule
}

export const pushRules = (base: any[], maybeRule: Recordable | boolean) => {
  if (maybeRule)
    base.push(maybeRule)
}

export const createBaseOption = <T = any>(name: string, option?: BaseOption): BaseOption<T> => {
  const baseOption: BaseOption = {
    name,
    trigger: ['blur', 'change'],
  }
  const o = assign(baseOption, option)

  return o
}
