import { type BaseSyntheticEvent } from 'react';
import {
  type UseFormRegister,
  type FieldErrors,
  type Control
} from 'react-hook-form';
import { IFormCreateProject } from '../../../schemas/form/createProject/types';


export interface IUseFormCreateProject {
  registerForm: IRegisterForm;
  registerInput: UseFormRegister<IFormCreateProject>;
  errors: FieldErrors<IFormCreateProject>;
  control: Control<IFormCreateProject>;
  isReset: boolean;
  isCreatingProject: boolean;
}

export interface IRegisterForm {
  onSubmit: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
}
