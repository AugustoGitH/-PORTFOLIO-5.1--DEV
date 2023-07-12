

import techsInProjects from "../../../../../../settings/techsInProjects"
import * as S from "./styles"


const TechologiesInProjects = (): JSX.Element => {
  return (
    <S.TechologiesInProjects>
      <h1>technologies in projects</h1>
      <ul>
        {
          techsInProjects.map((tech) => (
            <li key={tech.name}>
              <span>
                {tech.icon}
                <h2>{tech.name}</h2>
              </span>
            </li>))
        }
      </ul>
    </S.TechologiesInProjects>
  )
}


export default TechologiesInProjects