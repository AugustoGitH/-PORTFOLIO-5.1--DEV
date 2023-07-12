
import { AxiosError } from 'axios';

import constants from './constants';
import { type IResponseFetchLogin, type IServiceLogin } from './types';
import apiRoutes from '../../../constants/apiRoutes';
import { IFormLogin } from '../../../../schemas/form/login/types';
import { api } from '../../../settings/axios';

const login = async (form: IFormLogin): Promise<IServiceLogin> => {
  try {
    const { data } = await api.post<IResponseFetchLogin>(
      apiRoutes.public.LOGIN,
      form
    );
    return {
      message: data.message,
      isLogged: true
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        message:
          error.response?.data?.message ??
          constants.GENERIC_ERROR_MESSAGE_LOGIN,
        isLogged: false
      };
    }
    return {
      message: constants.GENERIC_ERROR_MESSAGE_LOGIN,
      isLogged: false
    };
  }
};

export default login;
