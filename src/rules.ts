import { string } from './string'
import { select } from './select'
import type {
  SelectOption,
  StringOption,
} from './types'

export class Rules {
  str(option: StringOption) {
    return string(option)
  }

  select(option: SelectOption) {
    return select(option)
  }
}
