import FiltersTypeProject from './components/FiltersTypesProject';
import ProjectList from './components/ProjectList';
import * as S from './styles';

const PortfolioProjects = (): JSX.Element => {
  return (
    <S.PortfolioProjects>
      <h1>Portfolio Projects</h1>
      <FiltersTypeProject />
      <ProjectList />
    </S.PortfolioProjects>
  );
};

export default PortfolioProjects;
