import type { CreateFn } from '../types.d'
import { isFakeValue } from './index'

export const createMessage = (message = '', name = '', sup = '') => {
  return message || `${name}${sup}`
}

export const createRequiredRule: CreateFn = (option) => {
  const { required, message, name, trigger, type } = option

  if (!required)
    return false

  const msg = createMessage(message, name, '为必填项')
  const rule = {
    required: true,
    message: msg,
    type,
    trigger: trigger || 'blur',
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

  const msg = createMessage(message, name, `长度需要在${min}和${max}之间`)

  if (isFakeValue(min) && isFakeValue(max))
    return false

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
