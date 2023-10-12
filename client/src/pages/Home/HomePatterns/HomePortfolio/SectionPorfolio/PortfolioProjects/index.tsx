import Translate from '../../../../../../components/Translate';
import FiltersTypeProject from './components/FiltersTypesProject';
import ProjectList from './components/ProjectList';
import * as S from './styles';

const PortfolioProjects = (): JSX.Element => {
  return (
    <S.PortfolioProjects>
      <h1><Translate>Meus Projetos</Translate></h1>
      <FiltersTypeProject />
      <ProjectList />
    </S.PortfolioProjects>
  );
};

export default PortfolioProjects;
