import { type BaseSyntheticEvent } from 'react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';
import { IFormLogin } from '../../../schemas/form/login/types';


export interface IUseFormLogin {
  registerForm: IRegisterForm;
  registerInput: UseFormRegister<IFormLogin>;
  errors: FieldErrors<IFormLogin>;
}

export interface IRegisterForm {
  onSubmit: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
}
