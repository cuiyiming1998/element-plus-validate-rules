import type { BaseOption, PasswordOption } from './types'
import {
  createBaseOption,
  createMessage,
  createRequiredRule,
  pushRules,
} from './utils/create'
import M from './utils/regExpMap'

const createPasswordValidator = (option: PasswordOption) => {
  const { message, name, trigger, type } = option

  const sup = '至少八个字符, 至少一个字母, 一个数字和一个特殊字符'
  const msg = createMessage(message, name, sup)
  const rule = {
    required: true,
    message: msg,
    type,
    pattern: M.password,
    trigger,
  }
  return rule
}

export function password(option: PasswordOption = {}) {
  const rules: BaseOption[] = []

  const baseOption = createBaseOption('密码', option)

  const requiredRule = createRequiredRule(baseOption)
  pushRules(rules, requiredRule)

  const regExpRule = createPasswordValidator(baseOption)
  pushRules(rules, regExpRule)

  return [...rules]
}
