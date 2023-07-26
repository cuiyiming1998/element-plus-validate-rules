import {
  createBaseOption,
  createMessage,
  createRequiredRule,
  pushRules,
} from './utils/create'
import type { BaseOption, TelOption } from './types'
import M from './utils/regExpMap'

const createTelRule = (option: BaseOption) => {
  const { message, trigger, type, name, pattern } = option

  const msg = createMessage(message, name, '请重新输入')
  const rule = {
    message: msg,
    type,
    trigger,
    pattern: pattern || M.tel,
  }
  return rule
}

export function tel(option?: TelOption) {
  const rules: BaseOption[] = []

  const baseOption = createBaseOption('固定电话', option)

  const requiredRule = createRequiredRule(baseOption)
  pushRules(rules, requiredRule)

  const mobileRule = createTelRule(baseOption)
  pushRules(rules, mobileRule)

  console.log('1', rules)
  return [...rules]
}
