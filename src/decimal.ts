import type { BaseOption, DecimalOption } from './types'
import { isFakeValue } from './utils'
import {
  createBaseOption,
  createMessage,
  createRangeRule,
  createRequiredRule,
  pushRules,
} from './utils/create'
import M from './utils/regExpMap'

const createSuffixMessage = (precision?: number) => {
  const CnMap = ['零', '一', '两', '三', '四', '五', '六', '七', '八', '九']
  let num
  if (precision)
    num = CnMap[precision]
  const msg = precision ? `最多保留${num}位小数` : '应为整数'

  return msg
}

const createPatternRule = (option: DecimalOption): BaseOption => {
  const { message, trigger, name, precision, type } = option

  const c = precision || 0

  const m = createSuffixMessage(c)

  const msg = createMessage(message, name, m)

  const validator = (_: any, value: number | string, cb: Fn) => {
    if (isFakeValue(value))
      cb(new Error(msg))

    if (value === '' || value === 0)
      cb()

    const valueStr = value.toString()
    if (!M.numberString.test(valueStr)) {
      const numberError = createMessage(message, name, '应为数字')
      cb(new Error(numberError))
    }

    const values = value.toString().split('.')
    if (values.length > 2)
      cb(new Error(msg))
    if (values.length === 1) {
      cb()
      return true
    }

    const decimal = values[1]
    decimal.length <= c ? cb() : cb(new Error(msg))
  }

  const rule: BaseOption = {
    trigger,
    type: type || 'number',
    validator,
  }
  return rule
}

export function decimal(option: DecimalOption) {
  const { name, type } = option

  const rules: BaseOption[] = []

  const baseOption = createBaseOption(name, option, type || 'number')

  const requiredRule = createRequiredRule(baseOption)
  pushRules(rules, requiredRule)

  const patternRule = createPatternRule(baseOption as DecimalOption)
  pushRules(rules, patternRule)

  const rangeRule = createRangeRule(baseOption)
  pushRules(rules, rangeRule)

  return [...rules]
}
