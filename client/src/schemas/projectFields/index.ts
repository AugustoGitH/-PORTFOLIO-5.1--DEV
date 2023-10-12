import { IProjectEditabled } from '../../hooks/project/private/useEditProject/types'
import {
  whiteListTechsUsedProject,
  whiteListTypesProject,
} from '../form/settings'
import { IFormCreateProject } from './types'

interface IConditionField {
  condition: boolean
  message: string
}

interface IFieldCondition {
  label: string
  conditions: IConditionField[]
}

interface IFiedlsProject extends IFormCreateProject, IProjectEditabled {}

const allConditionsSchema = (
  fieldsProject: IFiedlsProject
): Record<keyof IFiedlsProject, IFieldCondition> => ({
  orderOfFive: {
    label: '',
    conditions: [
      {
        condition:
          !!fieldsProject.orderOfFive &&
          typeof fieldsProject.orderOfFive !== 'number',
        message:
          'É necessário que a ordem preferêncial do proejeta seja do tipo number!',
      },
    ],
  },
  name: {
    label: 'Nome do Projeto',
    conditions: [
      {
        condition: typeof fieldsProject.name !== 'string',
        message: 'O nome do projeto deve ser do tipo string!',
      },
      {
        condition: !fieldsProject.name,
        message: 'O nome do projeto é requirido!',
      },
      {
        condition: fieldsProject.name.length < 5,
        message: 'O nome do projeto deve possuir no minimo 5 caracteres!',
      },
      {
        condition: fieldsProject.name.length > 35,
        message: 'O nome do projeto deve possuir no máximo 35 caracteres!',
      },
    ],
  },
  websiteLink: {
    label: 'Link do Projeto',
    conditions: [],
  },
  videoLink: {
    label: 'Link da Preview',
    conditions: [],
  },
  repoLink: {
    label: 'Link do Repositório',
    conditions: [
      {
        condition:
          !!fieldsProject.repoLink &&
          typeof fieldsProject.repoLink !== 'string',
        message: 'O link do repositório deve ser do tipo string!',
      },
      {
        condition: !!fieldsProject.repoId && !!fieldsProject.repoLink,
        message:
          'Conflito! Você não pode enviar informações do repositório pelo id e um link não linear do repositório!',
      },
    ],
  },
  type: {
    label: 'Tipo de Projeto',
    conditions: [
      {
        condition: !whiteListTypesProject.includes(fieldsProject.type),
        message: 'O tipo escolhido é inválido!',
      },
      {
        condition: !fieldsProject.type,
        message: 'Você deve escolher qual será o tipo do prejeto!',
      },
    ],
  },
  technologiesUsed: {
    label: 'Tecnologias e Linguagens mais usadas',
    conditions: [
      {
        condition: !fieldsProject.technologiesUsed.every((tech) =>
          whiteListTechsUsedProject.includes(tech)
        ),
        message: 'Uma das tecnologias é inválida!',
      },
      {
        condition: fieldsProject.technologiesUsed.length < 2,
        message: 'Você deve escolher no minimo duas tecnologias!',
      },
      {
        condition:
          fieldsProject.technologiesUsed.length >
          whiteListTechsUsedProject.length,
        message: 'Foram escolhidas mais tecnologias do que o padrão definido!',
      },
    ],
  },
  repoId: {
    label: 'Nome do Repositório',
    conditions: [
      {
        condition:
          !!fieldsProject.repoId && typeof fieldsProject.repoId !== 'number',
        message: 'O id do repositorio do preojeto deve ser um número!',
      },
      {
        condition: !!fieldsProject.repoLink && !!fieldsProject.repoId,
        message:
          'Conflito! Você não pode enviar informações do repositório pelo id e um link não linear do repositório!',
      },
    ],
  },
  ...(!!fieldsProject.images && {
    images: {
      label: 'Imagens para o Projeto',
      conditions: [
        {
          condition: !fieldsProject.images.cover,
          message: 'O projeto deve possuir uma capa!',
        },
      ],
    },
  }),
})

const schemaProjectFields = <T extends IFormCreateProject | IProjectEditabled>(
  fieldsForACheck: T
): Record<keyof T, IFieldCondition> => {
  const whiteLIstField = Object.entries(fieldsForACheck).map(([field]) => field)

  const conditionsFieldSelected = Object.fromEntries(
    Object.entries(
      allConditionsSchema(fieldsForACheck as IFiedlsProject)
    ).filter(([field]) => whiteLIstField.includes(field))
  )

  return conditionsFieldSelected as Record<keyof T, IFieldCondition>
}

export default schemaProjectFields
