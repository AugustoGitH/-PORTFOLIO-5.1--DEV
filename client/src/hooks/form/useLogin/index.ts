import { type SubmitHandler, useForm } from 'react-hook-form';


import { zodResolver } from '@hookform/resolvers/zod';


import { type IUseFormLogin } from './types';
import { IFormLogin } from '../../../schemas/form/login/types';
import { schemaLogin } from '../../../schemas/form/login';
import loginService from '../../../services/authLevel/public/login';
import { useNavigate } from 'react-router-dom';

const useLogin = (): IUseFormLogin => {
  const {
    register: registerInput,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormLogin>({
    resolver: zodResolver(schemaLogin)
  });

  const navigation = useNavigate();

  const onSubmit: SubmitHandler<IFormLogin> = async (data): Promise<void> => {
    const { isLogged, message } = await loginService(data);

    alert(message);

    if (isLogged) {
      navigation('/panel');
      reset();
    }
  };

  const registerForm = {
    onSubmit: handleSubmit(onSubmit)
  };

  return {
    registerForm,
    registerInput,
    errors
  };
};

export default useLogin;
