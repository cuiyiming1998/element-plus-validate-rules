import { vMobile } from './utils/validate'
import {
  createMessage,
  createRequiredRule,
  pushRules,
} from './utils/create'
import type { MobileOption } from './types'

const createMobileRule = (option: MobileOption = {}) => {
  const { message, trigger, type } = option

  const msg = createMessage(message, undefined, '手机号格式有误')
  const rule = {
    required: true,
    message: msg,
    type,
    trigger: trigger || 'blur',
    validator: vMobile,
  }
  return rule
}

export function mobile(option: MobileOption = {}) {
  const rules: any[] = []

  const requiredRule = createRequiredRule(option)
  pushRules(rules, requiredRule)

  const mobileRule = createMobileRule(option)
  pushRules(rules, mobileRule)

  return [...rules]
}
