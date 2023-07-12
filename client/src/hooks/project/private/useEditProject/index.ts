import { useEffect, useState } from 'react';


import {
  type IReturnCompareEditValues,
  type IProjectEditabled,
  type IUseEditProject,
  type IStateInputsEdit
} from './types';
import compareEditValues from './utils/compareEditValues';
import verifyFormUpdateProject from './utils/verifyFormUpdateProject';
import { IProjectPrivate } from '../../../../types/Project';
import useProjectsStore from '../../../../stores/project/private/useProjects';

import deleteProjectService from '../../../../services/authLevel/private/deleteProject'; 
import updateProjectService from '../../../../services/authLevel/private/updateProject';

const useEditProject = (project: IProjectPrivate): IUseEditProject => {
  const [originValues, setOriginValues] = useState<IProjectEditabled>({
    orderOfFive: project.orderOfFive,
    name: project.name,
    websiteLink: project.websiteLink,
    videoLink: project.videoLink,
    type: project.type,
    technologiesUsed: project.technologiesUsed,
    repoId: project.repoId,
    repoLink: project.repoLink
  });

  const [statesInputEdit, setStatesInputEdit] = useState<IStateInputsEdit>({
    name: false,
    websiteLink: false,
    videoLink: false,
    repoId: false,
    repoLink: false
  });

  const [valuesProject, setValuesProject] =
    useState<IProjectEditabled>(originValues);

  const [comparisons, setComparisons] =
    useState<IReturnCompareEditValues | null>(null);

  const [isEdited, setIsEdited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { deleteProject, updateProject } = useProjectsStore();

  useEffect(() => {
    const compare = compareEditValues(valuesProject, originValues);
    setComparisons(compare);

    setIsEdited(compare.modified);
  }, [valuesProject, originValues]);

  const addEditedValues = (
    attr: keyof IProjectEditabled,
    newValue: any
  ): void => {
    setValuesProject((prevValues) => ({
      ...prevValues,
      [attr]: newValue
    }));
  };

  const handleToggleStateInputEdit = (field: keyof IStateInputsEdit): void => {
    setStatesInputEdit((prevStates) => ({
      ...prevStates,
      [field]: !prevStates[field]
    }));
  };

  const resetStatesInputsEdit = (): void => {
    setStatesInputEdit(
      (prevStates) =>
        Object.fromEntries(
          Object.entries(prevStates).map(([field]) => [field, false])
        ) as IStateInputsEdit
    );
  };

  const handleReloadRepo = async (): Promise<void> => {
    console.log(project._id);
  };

  const handleDeleteProject = async (): Promise<void> => {
    setIsLoading(true);
    const { message, deleted } = await deleteProjectService(project._id);
    alert(message);
    setIsLoading(false);
    if (deleted) {
      deleteProject(project._id);
    }
  };

  const handleUpdateProject = async (): Promise<void> => {
    const { error, message: messageVerifyFormUpdate } =
      verifyFormUpdateProject(valuesProject);

    if (error) {
      alert(messageVerifyFormUpdate);
      return;
    }
    setIsLoading(true);
    const { updated, message: messageUpdateProject } =
      await updateProjectService({
        ...valuesProject,
        idProject: project._id
      });

    alert(messageUpdateProject);
    setIsLoading(false);
    if (updated) {
      resetUpdate();
      updateProject(project._id, valuesProject);
    }
  };

  const resetUpdate = (): void => {
    setOriginValues(valuesProject);
    setIsEdited(false);
    resetStatesInputsEdit();
  };

  const undoChanges = (): void => {
    setValuesProject(originValues);
    resetStatesInputsEdit();
  };

  return {
    addEditedValues,
    valuesProject,
    handleDeleteProject,
    handleReloadRepo,
    comparisons,
    handleUpdateProject,
    undoChanges,
    isLoading,
    isEdited,
    statesInputEdit,
    handleToggleStateInputEdit
  };
};

export default useEditProject;
