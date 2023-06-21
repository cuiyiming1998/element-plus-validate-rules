import type { SelectOption } from './types'
import {
  createLengthRule,
  createRangeRule,
  createRequiredRule,
  pushRules,
} from './utils/create'

const getType = (multiple = false) => {
  return multiple ? 'array' : 'string'
}
export function select(option: SelectOption = {}) {
  const rules: any[] = []

  const type = getType(option.multiple)
  option.type = type

  const requiredRule = createRequiredRule(option)
  pushRules(rules, requiredRule)

  const lengthRule = createLengthRule(option)
  pushRules(rules, lengthRule)

  const rangeRule = createRangeRule(option)
  pushRules(rules, rangeRule)

  console.log(rules)
  return [...rules]
}
