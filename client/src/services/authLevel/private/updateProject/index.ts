
import { AxiosError } from 'axios';

import apiRoutes from '../../../constants/apiRoutes';
import constants from '../constants';
import {
  type IFieldsUpdateProject,
  type IResponseFetchUpdateProject
} from './types';
import { api } from '../../../settings/axios';
import forceTypeReturn from '../../../../utils/forceTypeReturn';

const updateProject = async (
  valuesEdited: IFieldsUpdateProject
): Promise<IResponseFetchUpdateProject> => {
  try {
    const { data } = await api.put<IResponseFetchUpdateProject>(
      apiRoutes.private.UPDATE_PROJECT,
      forceTypeReturn<IFieldsUpdateProject>(valuesEdited)
    );
    return {
      message: data.message,
      updated: true
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        message:
          error.response?.data?.message ??
          constants.error.GENERIC_ERROR_UPDATE_PROJECT,
        updated: false
      };
    }
    return {
      message: constants.error.GENERIC_ERROR_UPDATE_PROJECT,
      updated: false
    };
  }
};

export default updateProject;
