
import { Loader } from "../../../../components/Loader"
import useFetchProjectsPrivate from "../../../../queries/services/fetchProjectsPrivate"
import useProjectsStore from "../../../../stores/project/private/useProjects"
import { IProjectPrivate } from "../../../../types/Project"
import orderPresentationOfProjects from "../../../../utils/project/orderPresentationOfProjects"
import Project from "./components/Project"
import * as S from "./styles"


const PainelManageProjects = (): JSX.Element => {
  const projects = useProjectsStore(state => state.projects)
  const { isLoading, isError } = useFetchProjectsPrivate()
  return (
    <S.PainelManageProjects>
      <h2>Gerenciar seus projetos</h2>
      <ul className="projects">
        {
          isLoading && !projects && (
            <S.HelperText>
              <Loader.Default color="light" />
            </S.HelperText>
          )
        }
        {
          isError && (
            <S.HelperText>
              <span><i className='bx bxs-x-circle' ></i>Ocorreu um erro ao buscar projetos</span>
            </S.HelperText>
          )
        }
        {
          projects?.length === 0 && (
            <S.HelperText>
              <span><i className='bx bxs-inbox'></i>Atualmente não há nenhum projeto publicado!</span>
            </S.HelperText>
          )
        }
        {
          projects && orderPresentationOfProjects<IProjectPrivate>(projects).map((project, index) => (
            <Project key={project._id} project={project} order={index} />
          ))
        }
      </ul>
    </S.PainelManageProjects>
  )
}

export default PainelManageProjects