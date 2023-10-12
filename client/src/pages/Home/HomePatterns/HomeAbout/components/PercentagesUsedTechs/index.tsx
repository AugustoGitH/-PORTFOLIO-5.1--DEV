import { useEffect, useState } from "react"



import * as S from "./styles"
import { sumPercentagesOfTechnologies } from "./utils"

import treatingTechsToShowPercentage from "../../../../../../utils/treatingTechsToShowPercentage"
import { Loader } from "../../../../../../components/Loader"
import techsWhiteListIcon from "../../../../../../settings/techsWhiteListIcon"
import { whiteListTechsUsedProject } from "../../../../../../schemas/form/settings"
import useFetchProjectsPublic from "../../../../../../queries/services/fetchProjectsPublic"
import LegendItem from "../../../../../../components/LegendItem"

const PercentagesUsedTechs = (): JSX.Element => {
  const { data: projectsInData, isLoading, isError } = useFetchProjectsPublic()
  const [percentagesTech, setPercentagesTechs] = useState<Record<string, number> | null>(null)

  useEffect(() => {
    if (projectsInData) {
      const pointersProjects: Array<Record<string, number>> = projectsInData.map(project => project.repositoryTechnologiesPoints)
      setPercentagesTechs(
        treatingTechsToShowPercentage(
          sumPercentagesOfTechnologies(pointersProjects),
          whiteListTechsUsedProject
        )
      )
    }
  }, [projectsInData])

  return (
    <S.PercentagesUsedTechs>
      {
        isLoading && !percentagesTech ? (
          <S.Loader>
            <Loader.Default color="dark" />
          </S.Loader>
        ) : <></>
      }
      {
        isError || (!percentagesTech && !isLoading) ? (
          <S.NotFound>
            <span><i className='bx bx-x-circle'></i>Não foi possivel carregar as porcentagens das tecnologias.</span>
          </S.NotFound>
        ) : <></>
      }

      {
        percentagesTech && Object.entries(percentagesTech).map(([tech, percent], index) => (
          <LegendItem legend={tech} key={`${tech}-${percent}-${index}-percentage-tech`}>
            <S.BarPercentage key={`${tech}-percentage-total`} order={index} percent={percent} tech={tech} >
              <span className="icon-tech">
                {techsWhiteListIcon.find(techIcon => techIcon.tech === tech)?.icon}
              </span>
              <div className="percentage-bar-container">
                <div className="percentage-bar-content">
                  <span className="percentage-value">{percent}%</span>
                </div>
              </div>
            </S.BarPercentage>
          </LegendItem>
        ))
      }
    </S.PercentagesUsedTechs >
  )
}

export default PercentagesUsedTechs