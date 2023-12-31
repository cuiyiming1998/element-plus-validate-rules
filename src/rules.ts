import { string } from './string'
import { select } from './select'
import { mobile } from './mobile'
import { tel } from './tel'
import { password } from './password'
import { numberStr } from './numberString'
import { todayAfter } from './time'
import { decimal } from './decimal'
import { int } from './int'
import { email } from './email'
import { lng } from './lng'
import { lat } from './lat'
import type {
  DecimalOption,
  IntOption,
  MobileOption,
  PasswordOption,
  SelectOption,
  StringOption,
  TelOption,
  TimeOption,
} from './types'

export class Rules {
  str(option: StringOption) {
    return string(option)
  }

  email(option: StringOption) {
    return email(option)
  }

  lat(option: StringOption) {
    return lat(option)
  }

  lng(option: StringOption) {
    return lng(option)
  }

  numberStr(option: StringOption) {
    return numberStr(option)
  }

  select(option: SelectOption) {
    return select(option)
  }

  mobile(option?: MobileOption) {
    return mobile(option)
  }

  tel(option?: TelOption) {
    return tel(option)
  }

  password(option?: PasswordOption) {
    return password(option)
  }

  todayAfter(option: TimeOption) {
    return todayAfter(option)
  }

  decimal(option: DecimalOption) {
    return decimal(option)
  }

  int(option: IntOption) {
    return int(option)
  }
}
