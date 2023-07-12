import { IProjectPrivate } from "../../../../types/Project";


export interface IResponseFetchCreateProject {
  message: string;
  project: IProjectPrivate | null;
}

export interface IResponseGetProject extends IResponseFetchCreateProject {
  created: boolean;
}
