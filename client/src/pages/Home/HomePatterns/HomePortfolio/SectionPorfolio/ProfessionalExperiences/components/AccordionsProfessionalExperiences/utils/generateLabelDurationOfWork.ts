import { monthsLabels } from '@/constants/dateLabels'
import { TLanguage } from '@/settings/translation/types'
import translateString from '@/settings/translation/utils/translateString'
import calculateDifferenceBetweenDates from '@/utils/calculateDifferenceBetweenDates'
import createDateFromMonthYearString from '@/utils/createDateFromMonthYearString'

const formatLabelDiff = (
  years: number,
  months: number,
  lang: TLanguage | undefined
) => {
  return `${
    years
      ? `${years} ${translateString(`ano${years !== 1 ? 's' : ''}`, lang)}`
      : ''
  } ${years && months ? 'e' : ''} ${
    months
      ? `${months} ${translateString(`m${months !== 1 ? 'eses' : 'ês'}`, lang)}`
      : ''
  }`
}

interface IGenerateLabelDuratinOfWorkParams {
  lang: TLanguage | undefined
  durationOfWork: {
    current: boolean
    startDate: string
    endDate?: string
  }
}
const generateLabelDurationOfWork = ({
  lang,
  durationOfWork,
}: IGenerateLabelDuratinOfWorkParams) => {
  const dateStrStart = createDateFromMonthYearString(durationOfWork.startDate)
  const dateStrEnd = durationOfWork.endDate
    ? createDateFromMonthYearString(durationOfWork.endDate)
    : null
  const diffDateStartEnd = dateStrEnd
    ? calculateDifferenceBetweenDates(dateStrStart, dateStrEnd)
    : null
  const diffDateStartCurrent = calculateDifferenceBetweenDates(
    dateStrStart,
    new Date()
  )

  const labelDiffFinish = diffDateStartEnd
    ? formatLabelDiff(diffDateStartEnd.years, diffDateStartEnd.months, lang)
    : null
  const labelDiffCurrent = formatLabelDiff(
    diffDateStartCurrent.years,
    diffDateStartCurrent.months,
    lang
  )

  const labelDurationOfWork = `
    ${translateString(monthsLabels[dateStrStart.getMonth()], lang)} 
    ${dateStrStart.getFullYear()} - ${
    durationOfWork.current
      ? `${translateString('Atualmente', lang)} • ${labelDiffCurrent}`
      : labelDiffFinish ?? ''
  }`

  return labelDurationOfWork
}

export default generateLabelDurationOfWork
