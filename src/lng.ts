import type { StringOption } from './types'
import { assign } from './utils/object'
import M from './utils/regExpMap'
import Rules from './index'

export function lng(option: StringOption) {
  const o = assign(
    {
      name: '纬度',
      pattern: M.lng,
    },
    {
      ...option,
    },
  )
  const rules = Rules.str({
    ...o,
  })

  return [...rules]
}
