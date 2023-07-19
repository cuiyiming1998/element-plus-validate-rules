import type { StringOption } from './types'
import {
  createLengthRule,
  createRangeRule,
  createRequiredRule,
  pushRules,
} from './utils/create'

export function string(option: StringOption) {
  const rules: any[] = []

  const requiredRule = createRequiredRule(option)
  pushRules(rules, requiredRule)

  const lengthRule = createLengthRule(option)
  pushRules(rules, lengthRule)

  const rangeRule = createRangeRule(option)
  pushRules(rules, rangeRule)
  return [...rules]
}
