import { TProjectTechnologiesUsed, TProjectType } from "../../../../types/Project";


export interface IProjectEditabled {
  orderOfFive: number;
  name: string;
  type: TProjectType;
  technologiesUsed: TProjectTechnologiesUsed[];
  websiteLink: string;
  videoLink: string;
  repoId: number | null;
  repoLink: string;
}

export interface IResultCompare {
  valueOriginal: any;
  valueEdited: any;
  condition: boolean;
}

export interface IReturnCompareEditValues {
  comparisons: IResultCompare[];
  modified: boolean;
}

export interface IUseEditProject {
  addEditedValues: (attr: keyof IProjectEditabled, newValue: any) => void;
  valuesProject: IProjectEditabled;
  handleDeleteProject: () => Promise<void>;
  handleReloadRepo: () => Promise<void>;
  comparisons: IReturnCompareEditValues | null;
  handleUpdateProject: () => Promise<void>;
  undoChanges: () => void;
  isLoading: boolean;
  isEdited: boolean;
  statesInputEdit: IStateInputsEdit;
  handleToggleStateInputEdit: (field: keyof IStateInputsEdit) => void;
}

export interface IStateInputsEdit
  extends Record<
    keyof Omit<IProjectEditabled, 'orderOfFive' | 'type' | 'technologiesUsed'>,
    boolean
  > {}
