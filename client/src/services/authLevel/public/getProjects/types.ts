import { IProjectPublic } from "../../../../types/Project";


export interface IResponseFetchGetProjects {
  message: string;
  projects: IProjectPublic[] | null;
}

export interface IServiceGetProjects extends IResponseFetchGetProjects {
  projectsSought: boolean;
}
