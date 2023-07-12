import { IProjectEditabled } from "../../../../hooks/project/private/useEditProject/types";
import { IProjectPrivate } from "../../../../types/Project";


export interface IDashboardData {
  likes: {
    currentDay: number ;
    all: number ;
  };
  views: {
    currentDay: number ;
    all: number ;
  };
  completedProjects: number ;
  devlopmentProjects: number ;
  ladingPages: number ;
  webApps: number ;
  ecommerces: number ;
}

export interface IStates {
  projects: IProjectPrivate[]  | null;
  dataDashboard: IDashboardData  | null;
}

export interface IActions {
  setProjects: (projects: IProjectPrivate[] | null) => void;
  deleteProject: (idProject: string) => void;
  setDataDashboard: (projects: IProjectPrivate[] | null) => void;
  addProject: (project: IProjectPrivate) => void;
  updateProject: (idProject: string, fieldsEdit: IProjectEditabled) => void;
}
