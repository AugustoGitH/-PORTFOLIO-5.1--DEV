import createDateFromMonthYearString from "@/utils/createDateFromMonthYearString"
import * as S from "./styles"
import calculateDifferenceBetweenDates from "@/utils/calculateDifferenceBetweenDates"
import { monthsLabels } from "@/constants/dateLabels"
import Translate from "@/components/Translate"
import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { useState } from "react"
interface IAccordion {
  title: string,
  companyName: string,
  companyImage: string,
  durationOfWork: {
    current: boolean,
    startDate: string,
    endDate?: string
  },
  localeOfWork: string,
  description: string,
  technologiesUsed: string[]

}

interface IAccordionsProps {
  accordions: IAccordion[]
}

interface IAccordionProps {
  className?: string,
  accordion: IAccordion,
  open: boolean,
  onClick: () => void
}

const formatLabelDiff = (years: number, months: number) => {
  return `${years ? `${years} ano${years !== 1 ? "s" : ""}` : ""} ${years && months ? "e" : ""} ${months ? `${months} m${months !== 1 ? "eses" : "ês"}` : ""}`
}

const AccordionProfessionalExperiences = ({ className, accordion, open, onClick }: IAccordionProps) => {
  const dateStrStart = createDateFromMonthYearString(accordion.durationOfWork.startDate)
  const dateStrEnd = accordion.durationOfWork.endDate ? createDateFromMonthYearString(accordion.durationOfWork.endDate) : null
  const diffDateStartEnd = dateStrEnd ? calculateDifferenceBetweenDates(dateStrStart, dateStrEnd) : null
  const diffDateStartCurrent = calculateDifferenceBetweenDates(dateStrStart, new Date())

  const labelDiffFinish = diffDateStartEnd ? formatLabelDiff(diffDateStartEnd.years, diffDateStartEnd.months) : null
  const labelDiffCurrent = formatLabelDiff(diffDateStartCurrent.years, diffDateStartCurrent.months)

  const labelDurationOfWork = `
    ${monthsLabels[dateStrStart.getMonth()]} 
    ${dateStrStart.getFullYear()} - ${accordion.durationOfWork.current ? `Atualmente • ${labelDiffCurrent}` : labelDiffFinish ?? ""}`

  return (
    <S.AccordionProfessionalExperiences isOpen={open} onClick={onClick} className={className}>
      <img src={accordion.companyImage} alt={accordion.companyName} />
      <div className="accordion-content">
        <div className="summary">
          <span className="title"><Translate>{accordion.title}</Translate></span>
          <span className="company-name"><Translate>{accordion.companyName}</Translate></span>
        </div>
        <div className="detail">
          <span className="duration-of-work"><Translate>{labelDurationOfWork}</Translate></span>
          <span className="locale-of-work"><Translate>{accordion.localeOfWork}</Translate></span>
          <p><Translate>{accordion.description}</Translate></p>
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

const AccordionsProfessionalExperiences = ({ accordions }: IAccordionsProps) => {
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