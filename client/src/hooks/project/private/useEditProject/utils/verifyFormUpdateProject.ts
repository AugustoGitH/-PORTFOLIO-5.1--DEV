import { type IProjectEditabled } from '../types';

interface IConditionSchema {
  condition: boolean;
  message: string;
}

type TNameFiledVerify = 'name' | 'type' | 'technologiesUsed';

interface IVerifyFormUpdateProject {
  error: boolean;
  message: string | null;
}

const SchemaConditions = (
  editedValues: IProjectEditabled
): Record<TNameFiledVerify, IConditionSchema> => ({
  name: {
    condition: editedValues.name.length < 47 && editedValues.name.length > 3,
    message:
      'Por favor, verifique se o nome do seu projeto tem entre 3 e 47 caracteres.'
  },
  type: {
    condition: !!editedValues.type,
    message: 'É necessário que escolha um tipo para o seu projeto.'
  },
  technologiesUsed: {
    condition: editedValues.technologiesUsed.length >= 2,
    message:
      'Por favor, selecione pelo menos duas das tecnologias mais utilizadas em seu projeto.'
  }
});

const verifyFormUpdateProject = (
  project: IProjectEditabled
): IVerifyFormUpdateProject => {
  const conditions = SchemaConditions(project);
  const alertsActives = Object.entries(conditions)
    .filter(([, value]) => !value.condition)
    .map(([, value]) => value);

  return {
    error: alertsActives.length > 0,
    message: alertsActives[0]?.message ?? null
  };
};

export default verifyFormUpdateProject;
