import { Dispatch, FormEventHandler, SetStateAction } from 'react'
import { IFormCreateProject } from '../../../../schemas/projectFields/types'

export interface IAlertDialog {
  title: string
  message: string
  show: boolean
  error: boolean
}

export interface IUseCreateProject {
  onChangeField: (name: keyof IFormCreateProject, value: TAllFields) => void
  statusForm: IFormCreateProject
  isRestarted: boolean
  onSubmit: FormEventHandler<HTMLFormElement>
  alertDialog: IAlertDialog
  setAlertDialog: Dispatch<SetStateAction<IAlertDialog>>
  isCreating: boolean
}

export type TAllFields = IFormCreateProject[keyof IFormCreateProject]
