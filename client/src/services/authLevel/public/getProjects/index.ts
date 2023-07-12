

import { AxiosError } from 'axios';
import apiRoutes from '../../../constants/apiRoutes';
import { api } from '../../../settings/axios';
import constants from './constants';
import {
  type IResponseFetchGetProjects,
  type IServiceGetProjects
} from './types';

const getProjects = async (): Promise<IServiceGetProjects> => {
  try {
    const { data } = await api.get<IResponseFetchGetProjects>(
      apiRoutes.public.GET_PROJECTS
    );
    return {
      message: data.message,
      projects: data.projects,
      projectsSought: true
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        message:
          error.response?.data?.message ??
          constants.GENERIC_ERROR_MESSAGE_GET_PROJECTS,
        projects: null,
        projectsSought: false
      };
    }
    return {
      message: constants.GENERIC_ERROR_MESSAGE_GET_PROJECTS,
      projects: null,
      projectsSought: false
    };
  }
};

export default getProjects;
