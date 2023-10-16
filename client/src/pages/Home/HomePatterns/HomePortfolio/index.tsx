import { forwardRef } from "react"

import * as S from "./styles"
import { SectionPorfolio } from "./SectionPorfolio"

interface IHomePortfolioProps {
  id: string
}

const HomePortfolio = forwardRef<HTMLDivElement, IHomePortfolioProps>(({ id }, ref) => {
  return (
    <S.HomePortfolio ref={ref} id={id}>
      <SectionPorfolio.Main />
      <SectionPorfolio.ProfessionalExperiences />
      <SectionPorfolio.TechologiesInProjects />
      <SectionPorfolio.PortfolioProjects />
    </S.HomePortfolio>
  )
})

HomePortfolio.displayName = "PortfolioSection"

export default HomePortfolio