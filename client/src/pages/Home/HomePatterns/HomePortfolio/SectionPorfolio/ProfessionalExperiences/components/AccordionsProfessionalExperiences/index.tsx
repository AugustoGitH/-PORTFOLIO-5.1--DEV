import createDateFromMonthYearString from "@/utils/createDateFromMonthYearString"
import * as S from "./styles"
import calculateDifferenceBetweenDates from "@/utils/calculateDifferenceBetweenDates"
import { monthsLabels } from "@/constants/dateLabels"

import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { ReactNode, useState } from "react"
import translateString from "@/settings/translation/utils/translateString"
import { TLanguage } from "@/settings/translation/types"
interface IAccordion {
  title: string | ReactNode,
  companyName: string | ReactNode,
  companyImage: string,
  durationOfWork: {
    current: boolean,
    startDate: string,
    endDate?: string
  },
  localeOfWork: string | ReactNode,
  description: string | ReactNode,
  technologiesUsed: string[]

}

interface IAccordionsProps {
  accordions: IAccordion[]
  lang?: TLanguage
}

interface IAccordionProps {
  className?: string,
  accordion: IAccordion,
  open: boolean,
  lang?: TLanguage
  onClick: () => void
}

const formatLabelDiff = (years: number, months: number, lang: TLanguage | undefined) => {
  return `${years ? `${years} ${translateString(`ano${years !== 1 ? "s" : ""}`, lang)}` : ""} ${years && months ? "e" : ""} ${months ? `${months} ${translateString(`m${months !== 1 ? "eses" : "ês"}`, lang)}` : ""}`
}

const AccordionProfessionalExperiences = ({ lang, className, accordion, open, onClick }: IAccordionProps) => {
  const dateStrStart = createDateFromMonthYearString(accordion.durationOfWork.startDate)
  const dateStrEnd = accordion.durationOfWork.endDate ? createDateFromMonthYearString(accordion.durationOfWork.endDate) : null
  const diffDateStartEnd = dateStrEnd ? calculateDifferenceBetweenDates(dateStrStart, dateStrEnd) : null
  const diffDateStartCurrent = calculateDifferenceBetweenDates(dateStrStart, new Date())

  const labelDiffFinish = diffDateStartEnd ? formatLabelDiff(diffDateStartEnd.years, diffDateStartEnd.months, lang) : null
  const labelDiffCurrent = formatLabelDiff(diffDateStartCurrent.years, diffDateStartCurrent.months, lang)

  const labelDurationOfWork = `
    ${translateString(monthsLabels[dateStrStart.getMonth()], lang)} 
    ${dateStrStart.getFullYear()} - ${accordion.durationOfWork.current ? `${translateString("Atualmente", lang)} • ${labelDiffCurrent}` : labelDiffFinish ?? ""}`

  return (
    <S.AccordionProfessionalExperiences isOpen={open} onClick={onClick} className={className}>
      <img src={accordion.companyImage} alt={"Nome da empresa"} />
      <div className="accordion-content">
        <div className="summary">
          <span className="title">{accordion.title}</span>
          <span className="company-name">{accordion.companyName}</span>
        </div>
        <div className="detail">
          <span className="duration-of-work">{labelDurationOfWork}</span>
          <span className="locale-of-work">{accordion.localeOfWork}</span>
          <p>{accordion.description}</p>
          <ul className="technologies-used">
            {
              accordion.technologiesUsed.map((tech, index) => (
                <li key={`tech-${index}`}>{tech}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <Icon className="icon-arrow" icon="bx:chevron-down" />
    </S.AccordionProfessionalExperiences>
  )
}

const AccordionsProfessionalExperiences = ({ accordions, lang }: IAccordionsProps) => {
  const [accordionFocused, setAccordionFocused] = useState<string | null>(null)

  const handleClickAccordion = (id: string) => {
    setAccordionFocused(prevAcc => prevAcc === id ? null : id)
  }

  return (
    <S.AccordionsProfessionalExperiences>
      <div className="line-progress-exp">
      </div>
      <ul className="accordions-content">
        {
          accordions.map((accordion, index) => (
            <AccordionProfessionalExperiences
              lang={lang}
              key={`accordion-${index}`}
              accordion={accordion}
              open={accordionFocused === `accordion-${index}`}
              onClick={() => handleClickAccordion(`accordion-${index}`)}
            />
          ))
        }
      </ul>

    </S.AccordionsProfessionalExperiences>
  )
}

export default AccordionsProfessionalExperiences