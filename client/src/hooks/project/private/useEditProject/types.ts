import { Dispatch, SetStateAction } from 'react'
import {
  TProjectTechnologiesUsed,
  TProjectType,
} from '../../../../types/Project'

export interface IProjectEditabled {
  orderOfFive: number
  name: string
  type: TProjectType
  technologiesUsed: TProjectTechnologiesUsed[]
  websiteLink: string
  videoLink: string
  repoId: number | null
  repoLink: string
}

export interface IResultCompare {
  valueOriginal: any
  valueEdited: any
  condition: boolean
}

export interface IReturnCompareEditValues {
  comparisons: IResultCompare[]
  modified: boolean
}

export interface IAlertDialog {
  show: boolean
  title: string
  message: string
  error: boolean
  buttons?: {
    action?: {
      on: (() => void) | (() => Promise<void>)
      label: string
    }
    close?: {
      isActive: boolean
      label: string
    }
  }
}

export interface IUseEditProject {
  addEditedValues: (attr: keyof IProjectEditabled, newValue: any) => void
  valuesProject: IProjectEditabled
  handleDeleteProject: () => Promise<void>
  handleReloadRepo: () => Promise<void>
  comparisons: IReturnCompareEditValues | null
  handleUpdateProject: () => Promise<void>
  undoChanges: () => void
  isLoading: boolean
  isEdited: boolean
  statesInputEdit: IStateInputsEdit
  handleToggleStateInputEdit: (field: keyof IStateInputsEdit) => void
  alertDialog: IAlertDialog
  setAlertDialog: Dispatch<SetStateAction<IAlertDialog>>
}

export interface IStateInputsEdit
  extends Record<
    keyof Omit<IProjectEditabled, 'orderOfFive' | 'type' | 'technologiesUsed'>,
    boolean
  > {}
