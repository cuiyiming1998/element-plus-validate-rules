import { string } from './string'
import { select } from './select'
import { mobile } from './mobile'
import { password } from './password'
import type {
  MobileOption,
  PasswordOption,
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

  mobile(option: MobileOption) {
    return mobile(option)
  }

  password(option: PasswordOption) {
    return password(option)
  }
}
