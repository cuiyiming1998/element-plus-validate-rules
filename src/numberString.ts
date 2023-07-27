import type { BaseOption, StringOption } from './types'
import {
  createBaseOption,
  createLengthRule,
  createMessage,
  createRangeRule,
  createRequiredRule,
  pushRules,
} from './utils/create'
import M from './utils/regExpMap'

const createPatternRule = (option: BaseOption): BaseOption => {
  const { message, trigger, name, pattern } = option

  const msg = createMessage(message, name, '应仅为数字')
  const rule: BaseOption = {
    pattern: pattern || M.numberString,
    message: msg,
    trigger,
  }
  return rule
}

export function numberStr(option: StringOption) {
  const rules: BaseOption[] = []

  const baseOption = createBaseOption(option.name, option)

  const requiredRule = createRequiredRule(baseOption)
  pushRules(rules, requiredRule)

  const patternRule = createPatternRule(baseOption)
  pushRules(rules, patternRule)

  const lengthRule = createLengthRule(baseOption)
  pushRules(rules, lengthRule)

  const rangeRule = createRangeRule(option)
  pushRules(rules, rangeRule)

  return [...rules]
}
