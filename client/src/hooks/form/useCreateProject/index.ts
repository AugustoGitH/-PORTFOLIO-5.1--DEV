import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';


import { zodResolver } from '@hookform/resolvers/zod';

import { type IUseFormCreateProject } from './types';
import { IFormCreateProject } from '../../../schemas/form/createProject/types';
import schemaCreateProject from '../../../schemas/form/createProject';
import useProjectsStore from '../../../stores/project/private/useProjects';
import createProjectService from '../../../services/authLevel/private/createProject';

const useCreateProject = (): IUseFormCreateProject => {
  const {
    register: registerInput,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<IFormCreateProject>({
    resolver: zodResolver(schemaCreateProject)
  });

  const addProject = useProjectsStore((state) => state.addProject);

  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const onSubmit: SubmitHandler<IFormCreateProject> = async (data) => {
    setIsCreatingProject(true);

    const { created, message, project } = await createProjectService(data);

    alert(message);
    setIsCreatingProject(false);
    if (created && project) {
      addProject(project);
      reset();
      setIsReset(true);
      setTimeout(() => {
        setIsReset(false);
      }, 100);
    }
  };

  const registerForm = {
    onSubmit: handleSubmit(onSubmit)
  };

  return {
    registerInput,
    registerForm,
    errors,
    control,
    isReset,
    isCreatingProject
  };
};

export default useCreateProject;
