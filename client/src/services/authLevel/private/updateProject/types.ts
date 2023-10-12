import { IProjectEditabled } from '../../../../hooks/project/private/useEditProject/types'

export interface IResponseFetchUpdateProject {
  message: string
  updated: boolean
}

export interface IUpdateProject extends IResponseFetchUpdateProject {
  status: number
}

export interface IFieldsUpdateProject extends IProjectEditabled {
  idProject: string
}
