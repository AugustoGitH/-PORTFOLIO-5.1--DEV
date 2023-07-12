import { ITechIcon } from "../../../../../../../../../../../../settings/techsWhiteListIcon/types";
import { IRepositoryTechnologiesPoints } from "../../../../../../../../../../../../types/Project";


export interface IBarTechnologieProps {
  tech: string;
  percent: number;
  order: number;
  listIcons: ITechIcon[];
  idProject: string;
}

export interface IPopUpPercentTechsProps {
  percents: IRepositoryTechnologiesPoints;
  show: boolean;
  technologies: string[];
  onClose: () => void;
  idProject: string;
}
