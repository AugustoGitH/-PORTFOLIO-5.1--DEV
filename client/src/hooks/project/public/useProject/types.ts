import { IStatesShowPercentageTechs } from "../../../../stores/project/public/useProjects/types";


export interface IUseProject {
  likes: number;
  views: number;
  wasLiked: boolean;
  statesShowPercentageTechs: IStatesShowPercentageTechs;
  handleOpenPercentTechs: () => void;
  viewProject: () => Promise<void>;
  likeProject: () => Promise<void>;
  lodingLike: boolean;
  editStatesShowPercentageTechs: (
    statesPercentage: (
      prevStates: IStatesShowPercentageTechs
    ) => IStatesShowPercentageTechs
  ) => void;
}
