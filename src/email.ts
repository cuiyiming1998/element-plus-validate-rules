import type { StringOption } from './types'
import { assign } from './utils/object'
import M from './utils/regExpMap'
import Rules from './index'

export function email(option: StringOption) {
  const o = assign(
    {
      name: '邮箱',
      pattern: M.email,
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
