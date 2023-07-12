
import { AxiosError } from 'axios';

import apiRoutes from '../../../constants/apiRoutes';
import constants from '../constants';
import { type IResponseFetchLikeProject, type TStateLike } from './types';
import { api } from '../../../settings/axios';

const likeProject = async (
  idProject: string,
  stateLike: TStateLike
): Promise<IResponseFetchLikeProject> => {
  try {
    const { data } = await api.put<IResponseFetchLikeProject>(
      apiRoutes.public.LIKE_PROJECT,
      { idProject, stateLike }
    );
    return {
      message: data.message,
      action: true
    };
  } catch (error) {
    if (error instanceof AxiosError)
      return {
        message:
          error.response?.data.message ??
          constants.error.GENERIC_ERROR_LIKE_PROJECT,
        action: false
      };
    else
      return {
        message: constants.error.GENERIC_ERROR_LIKE_PROJECT,
        action: false
      };
  }
};

export default likeProject;
