import { useState } from 'react';



import { type IUseProject } from './types';
import { IProjectPublic } from '../../../../types/Project';
import useProjectsStore from '../../../../stores/project/public/useProjects';
import viewProjectService from '../../../../services/authLevel/public/viewProject';
import likeProjectService from '../../../../services/authLevel/public/likeProject';

const useProject = (project: IProjectPublic): IUseProject => {
  const likedProjects: string[] =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('projects-liked') ?? '[]')
      : [];

  const [likes, setLikes] = useState(project.likes.length);
  const [views, setViews] = useState(project.views.length);
  const [lodingLike, setLoadingLike] = useState(false);

  const [editStatesShowPercentageTechs, statesShowPercentageTechs] =
    useProjectsStore((state) => [
      state.editStatesShowPercentageTechs,
      state.statesShowPercentageTechs
    ]);

  const [wasLiked, setWasLiked] = useState(likedProjects.includes(project._id));

  const viewProject = async (): Promise<void> => {
    const { visualized } = await viewProjectService(project._id);

    setViews((prevViews) => (visualized ? prevViews + 1 : prevViews));
  };

  const likeProject = async (): Promise<void> => {
    const likedProjects: string[] =
      typeof window !== 'undefined'
        ? JSON.parse(window.localStorage.getItem('projects-liked') ?? '[]')
        : [];
    const projectIsLiked = likedProjects.includes(project._id);

    setLoadingLike(true);
    const { action } = await likeProjectService(
      project._id,
      projectIsLiked ? 'desfavorite' : 'favorite'
    );
    setLoadingLike(false);

    if (action && typeof window !== 'undefined') {
      window.localStorage.setItem(
        'projects-liked',
        JSON.stringify(
          projectIsLiked
            ? likedProjects.filter((idLiked) => idLiked !== project._id)
            : [...likedProjects, project._id]
        )
      );
      setLikes((prevLikes) => (projectIsLiked ? prevLikes - 1 : prevLikes + 1));
      setWasLiked(!projectIsLiked);
    }
  };

  const handleOpenPercentTechs = (): void => {
    editStatesShowPercentageTechs((prevStates) => ({
      ...Object.fromEntries(
        Object.entries(prevStates).map(([key]) => [key, false])
      ),
      [project._id]: true
    }));
  };

  return {
    lodingLike,
    viewProject,
    likeProject,
    likes,
    views,
    wasLiked,
    handleOpenPercentTechs,
    statesShowPercentageTechs,
    editStatesShowPercentageTechs
  };
};

export default useProject;
