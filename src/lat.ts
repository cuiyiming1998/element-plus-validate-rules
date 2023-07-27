import type { StringOption } from './types'
import { assign } from './utils/object'
import M from './utils/regExpMap'
import Rules from './index'

export function lat(option: StringOption) {
  const o = assign(
    {
      name: '纬度',
      pattern: M.lat,
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
