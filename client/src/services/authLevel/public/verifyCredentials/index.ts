

import apiRoutes from '../../../constants/apiRoutes';
import { api } from '../../../settings/axios';
import {
  type IServiceVerifyCredentials,
  type IResponseFetchVerifyCredentials
} from './types';

const verifyCredentials = async (): Promise<IServiceVerifyCredentials> => {
  const { data } = await api.get<IResponseFetchVerifyCredentials>(
    apiRoutes.public.VERIFY_CREDENTIALS
  );
  return {
    message: data.message,
    isAuthenticated: data.isAuthenticated
  };
};

export default verifyCredentials;
