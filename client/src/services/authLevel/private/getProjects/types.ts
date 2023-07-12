import { IProjectPrivate } from "../../../../types/Project";


export interface IResponseFetchGetProjects {
  message: string;
  projects: IProjectPrivate[] | null;
}

export interface IServiceGetProjects extends IResponseFetchGetProjects {
  projectsSought: boolean;
}
