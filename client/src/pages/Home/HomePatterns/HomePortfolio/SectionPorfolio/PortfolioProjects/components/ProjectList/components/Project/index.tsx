



import { useContext } from 'react';
import { Loader } from '../../../../../../../../../../components/Loader';
import TitleItem from '../../../../../../../../../../components/TitleItem';
import Translate from '../../../../../../../../../../components/Translate';
import useProject from '../../../../../../../../../../hooks/project/public/useProject';
import { whiteListTechsUsedProject } from '../../../../../../../../../../schemas/form/settings';
import ImagesCover from './components/ImagesCover';
import PopUpPercentTechs from './components/PopUpPercentTechs';
import * as S from './styles';
import { type IProjectProps } from './types';
import { TranslateContext } from '../../../../../../../../../../contexts/TranslateContext';
import translateString from '../../../../../../../../../../settings/translation/utils/translateString';

const Project = ({ project, order }: IProjectProps): JSX.Element => {
  const { language } = useContext(TranslateContext)
  const { likeProject, viewProject, likes, views, wasLiked, editStatesShowPercentageTechs, handleOpenPercentTechs, statesShowPercentageTechs, lodingLike } = useProject(project)
  return (
    <S.Project className="project" order={order}>
      <ImagesCover cover={project.images.cover} images={project.images.images} />
      <S.Description>
        <ul className="technologies">
          {project.technologiesUsed.map((tech: string) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <h4><Translate>{project.type}</Translate></h4>
        <h2>{project.name}</h2>
        <nav>
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              onClick={() => { void viewProject() }}
              rel="noreferrer"
            >
              <Translate>Visitar</Translate>
              <i className="bx bxs-book-content"></i>
            </a>
          )}
          {project.videoLink && (
            <a
              href={project.videoLink}
              target="_blank"
              onClick={() => { void viewProject() }}
              rel="noreferrer"
            >
              <Translate>Prévia</Translate>
              <i className="bx bx-play-circle"></i>
            </a>
          )}
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noreferrer">
              <Translate>Repositório</Translate>
              <i className="bx bxl-gitlab"></i>
            </a>
          )}
        </nav>
        <div className="controllers">
          <div className="btns-action">
            <TitleItem title={translateString("Estátisticas", language)}>
              <button
                className="btn-percent-techs" onClick={handleOpenPercentTechs}
              >
                <i className='bx bxs-bar-chart-alt-2'></i>
              </button>
            </TitleItem>

            <TitleItem title={translateString(wasLiked ? "Projeto curtido" : "Curtir projeto", language)}>
              <button
                className={`btn-to-like ${lodingLike ? "btn-to-like-block" : wasLiked ? "like-btn" : ""}`}
                onClick={() => { void likeProject() }}
              >
                {
                  lodingLike ? <Loader.Default color='light' size='sm' /> :
                    <i className="bx bxs-like"></i>
                }
              </button>
            </TitleItem>
          </div>
          <div className="statistics">
            <span className="display-likes">
              {likes}  <Translate>{`curtida${likes === 1 ? '' : 's'}`}</Translate>
            </span>
            <span className="display-views">
              {views} <Translate>{`visualizaç${views === 1 ? 'ão' : 'ões'}`}</Translate>
            </span>
          </div>

        </div>
        <PopUpPercentTechs
          idProject={project._id}
          show={statesShowPercentageTechs[project._id]}
          percents={project.repositoryTechnologiesPoints}
          onClose={() => { editStatesShowPercentageTechs(prevStates => ({ ...prevStates, [project._id]: false })); }}
          technologies={whiteListTechsUsedProject}
        />
      </S.Description>
    </S.Project>
  );
};

export default Project;
