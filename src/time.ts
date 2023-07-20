import type { BaseOption, TimeOption } from './types'
import { createBaseOption, createRequiredRule, pushRules } from './utils/create'

// TODO: 时间验证

export function todayAfter(option: TimeOption) {
  const { name, type } = option

  const rules: BaseOption[] = []

  const baseOption = createBaseOption(name, option, type || 'number')

  const requiredRule = createRequiredRule(baseOption)
  pushRules(rules, requiredRule)

  return [...rules]
}
