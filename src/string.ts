import type { StringOption } from './types'
import {
  createBaseOption,
  createLengthRule,
  createRangeRule,
  createRequiredRule,
  pushRules,
} from './utils/create'

export function string(option: StringOption) {
  const rules: any[] = []

  const baseOption = createBaseOption(option.name, option)

  const requiredRule = createRequiredRule(baseOption)
  pushRules(rules, requiredRule)

  const lengthRule = createLengthRule(baseOption)
  pushRules(rules, lengthRule)

  const rangeRule = createRangeRule(baseOption)
  pushRules(rules, rangeRule)
  return [...rules]
}
