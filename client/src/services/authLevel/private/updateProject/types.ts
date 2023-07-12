import { IProjectEditabled } from "../../../../hooks/project/private/useEditProject/types";


export interface IResponseFetchUpdateProject {
  message: string;
  updated: boolean;
}

export interface IFieldsUpdateProject extends IProjectEditabled {
  idProject: string;
}
