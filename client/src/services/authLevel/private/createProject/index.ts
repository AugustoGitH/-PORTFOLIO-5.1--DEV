import { AxiosError } from 'axios'

import constants from '../constants'
import {
  type IResponseFetchCreateProject,
  type IResponseGetProject,
} from './types'

import forceTypeReturn from '../../../../utils/forceTypeReturn'
import apiRoutes from '../../../constants/apiRoutes'
import { api } from '../../../settings/axios'
import { IFormCreateProject } from '../../../../schemas/projectFields/types'

const createProject = async (
  project: IFormCreateProject
): Promise<IResponseGetProject> => {
  try {
    const { data, status } = await api.post<IResponseFetchCreateProject>(
      apiRoutes.private.CREATE_PROJECT,
      forceTypeReturn<IFormCreateProject>(project)
    )
    return {
      message: data.message,
      created: true,
      project: data.project,
      status,
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        message:
          error.response?.data?.message ??
          constants.error.GENERIC_ERROR_CREATING_PROJECT,
        created: false,
        project: null,
        status: error.status ?? 500,
      }
    }
    return {
      message: constants.error.GENERIC_ERROR_CREATING_PROJECT,
      created: false,
      project: null,
      status: 500,
    }
  }
}

export default createProject
