
import { AxiosError } from 'axios';

import apiRoutes from '../../../constants/apiRoutes';
import constants from '../constants';
import { type IResponseFetchViewProject } from './types';
import { api } from '../../../settings/axios';

const viewProject = async (
  idProject: string
): Promise<IResponseFetchViewProject> => {
  try {
    const { data } = await api.put<IResponseFetchViewProject>(
      `${apiRoutes.public.VIEW_PROJECT}`,
      { idProject }
    );
    return {
      message: data.message,
      visualized: true
    };
  } catch (error) {
    if (error instanceof AxiosError)
      return {
        message:
          error.response?.data.message ??
          constants.error.GENERIC_ERROR_VIEW_PROJECT,
        visualized: false
      };
    else
      return {
        message: constants.error.GENERIC_ERROR_VIEW_PROJECT,
        visualized: false
      };
  }
};

export default viewProject;
