import type { IntOption } from './types'
import { assign } from './utils/object'
import Rules from './index'

export function int(option: IntOption) {
  const o = assign(
    {
      ...option,
    },
    {
      precision: 0,
    },
  )
  const rules = Rules.decimal({
    ...o,
  })

  return [...rules]
}
