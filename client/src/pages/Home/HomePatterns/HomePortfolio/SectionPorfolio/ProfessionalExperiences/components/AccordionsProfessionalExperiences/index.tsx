
import * as S from "./styles"


import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { ReactNode, useEffect, useRef, useState } from "react"

import { TLanguage } from "@/settings/translation/types"
import generateLabelDurationOfWork from "./utils/generateLabelDurationOfWork"
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


const AccordionProfessionalExperiences = ({ lang, className, accordion, open, onClick }: IAccordionProps) => {
  const labelDurationOfWork = generateLabelDurationOfWork({ lang, durationOfWork: accordion.durationOfWork })

  const detailContentRef = useRef<HTMLDivElement | null>(null)
  const detailContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const { current: detailContentElement } = detailContentRef
    const { current: detailContaineElement } = detailContainerRef
    if (detailContentElement && detailContaineElement) {
      detailContaineElement.style.height = open ? `${detailContentElement.offsetHeight}px` : "0px"
    }

  }, [open])

  return (
    <S.AccordionProfessionalExperiences isOpen={open} onClick={onClick} className={className}>
      <img src={accordion.companyImage} alt={"Nome da empresa"} />
      <div className="accordion-content">
        <div className="summary">
          <span className="title">{accordion.title}</span>
          <span className="company-name">{accordion.companyName}</span>
        </div>
        <div ref={detailContainerRef} className="detail">
          <div ref={detailContentRef} className="detail-content">
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