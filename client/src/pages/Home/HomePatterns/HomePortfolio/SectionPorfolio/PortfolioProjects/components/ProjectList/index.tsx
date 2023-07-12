


import useFetchProjectsPublic from '../../../../../../../../queries/services/fetchProjectsPublic';
import useProjectsStore from '../../../../../../../../stores/project/public/useProjects';
import Project from './components/Project';
import ProjectLoading from './components/ProjectLoading';
import * as S from './styles';

const ProjectList = (): JSX.Element => {
  const [canvasProjects, projects] = useProjectsStore(state => [state.canvasProjects, state.projects])
  const { isFetching, isError } = useFetchProjectsPublic()


  return (
    <S.ProjectList>
      {
        isFetching && !projects ? (
          <>
            <ProjectLoading />
            <ProjectLoading />
            <ProjectLoading />
          </>
        ) : <></>
      }
      {
        isError && (
          <S.HelperText>
            <span><i className='bx bxs-x-circle'></i>Ocorreu um erro ao buscar os projetos. Por favor, tente novamente mais tarde.</span>
          </S.HelperText>

        )
      }
      {
        projects && projects.length === 0 ? (
          <S.HelperText>
            <span><i className='bx bxs-inbox'></i>Não existe nenhum projeto disponível no momento.</span>
          </S.HelperText>
        ) : <></>
      }
      {
        projects && canvasProjects.length === 0 && projects.length !== 0 ? (
          <S.HelperText>
            <span><i className='bx bxs-inbox'></i>Nenhum projeto corresponde a essa categoria no momento.</span>
          </S.HelperText>
        ) : <></>
      }
      {
        canvasProjects.map((project, index) => (
          <Project key={project._id} project={project} order={index} />
        ))
      }
    </S.ProjectList>
  );
};

export default ProjectList;
