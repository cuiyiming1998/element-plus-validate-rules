import type { BaseOption, DecimalOption } from './types'
import {
  createBaseOption,
  createMessage,
  createRangeRule,
  createRequiredRule,
  pushRules,
} from './utils/create'
import M from './utils/regExpMap'

const createPatternRule = (option: BaseOption): BaseOption => {
  const { message, trigger, name } = option

  const msg = createMessage(message, name, '最多保留两位小数')
  const rule: BaseOption = {
    pattern: M.decimal,
    message: msg,
    trigger,
  }
  return rule
}

export function decimal(option: DecimalOption) {
  const { name, type } = option

  const rules: BaseOption[] = []

  const baseOption = createBaseOption(name, option, type || 'number')

  const requiredRule = createRequiredRule(baseOption)
  pushRules(rules, requiredRule)

  const patternRule = createPatternRule(baseOption)
  pushRules(rules, patternRule)

  const rangeRule = createRangeRule(baseOption)
  pushRules(rules, rangeRule)

  return [...rules]
}
