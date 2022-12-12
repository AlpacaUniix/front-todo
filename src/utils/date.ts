import moment from 'moment'
import { Era } from 'types'
import { enUS, th } from 'date-fns/locale'
import { format as localFormat } from 'date-fns'
import i18n from 'i18n'

export const convertEra = (date: string, era = Era.ChristianEra) =>
  moment(date).isValid()
    ? moment(date)
        [era === Era.ChristianEra ? 'add' : 'subtract'](543, 'years')
        .toDate()
    : null

export const getLocalDate = (date: Date | string, format: string) =>
  localFormat(new Date(date), format, {
    locale: i18n.language === 'th' ? th : enUS,
  })

export const checkAppointmentTime = (date?: string): boolean => {
  if (date) {
    const isTimePassed = moment().hours() >= 16
    const isDayPassed = moment().add(1, 'days').days() === moment(date).days()
    return isTimePassed && isDayPassed
  }
  return false
}