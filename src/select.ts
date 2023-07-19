import type { SelectOption } from './types'
import {
  createBaseOption,
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

  const { multiple, name } = option

  const type = getType(multiple)
  option.type = type

  const baseOption = createBaseOption(name || '', option)

  const requiredRule = createRequiredRule(baseOption)
  pushRules(rules, requiredRule)

  const lengthRule = createLengthRule(baseOption)
  pushRules(rules, lengthRule)

  const rangeRule = createRangeRule(option)
  pushRules(rules, rangeRule)

  return [...rules]
}
