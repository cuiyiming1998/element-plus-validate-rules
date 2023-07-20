import type { BaseOption, StringOption } from './types'
import {
  createLengthRule,
  createMessage,
  createRangeRule,
  createRequiredRule,
  pushRules,
} from './utils/create'
import M from './utils/regExpMap'

const createPatternRule = (option: StringOption): BaseOption => {
  const { message, trigger, name } = option

  const msg = createMessage(message, name, '应仅为数字')
  const rule: BaseOption = {
    pattern: M.numberString,
    message: msg,
    trigger,
  }
  return rule
}

export function numberStr(option: StringOption) {
  const rules: BaseOption[] = []

  const requiredRule = createRequiredRule(option)
  pushRules(rules, requiredRule)

  const patternRule = createPatternRule(option)
  pushRules(rules, patternRule)

  const lengthRule = createLengthRule(option)
  pushRules(rules, lengthRule)

  const rangeRule = createRangeRule(option)
  pushRules(rules, rangeRule)

  return [...rules]
}
