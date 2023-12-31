import {
  createBaseOption,
  createMessage,
  createRequiredRule,
  pushRules,
} from './utils/create'
import type { BaseOption, MobileOption } from './types'
import M from './utils/regExpMap'

const createMobileRule = (option: MobileOption = {}) => {
  const { message, trigger, type, name, pattern } = option

  const msg = createMessage(message, name, '请重新输入')
  const rule = {
    message: msg,
    type,
    trigger,
    pattern: pattern || M.mobile,
  }
  return rule
}

export function mobile(option: MobileOption = {}) {
  const rules: BaseOption[] = []

  const baseOption = createBaseOption('手机号', option)

  const requiredRule = createRequiredRule(baseOption)
  pushRules(rules, requiredRule)

  const mobileRule = createMobileRule(baseOption)
  pushRules(rules, mobileRule)

  return [...rules]
}
