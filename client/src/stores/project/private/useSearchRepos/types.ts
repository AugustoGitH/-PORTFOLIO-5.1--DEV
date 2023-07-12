import { IRepository } from "../../../../types/repository";


export interface IStates {
  canvasRepos: IRepository[];
  repos: IRepository[] | null | undefined;
}

export interface IActions {
  setRepos: (repos: IRepository[]) => void;
  searchRepos: (name: string) => void;
}
