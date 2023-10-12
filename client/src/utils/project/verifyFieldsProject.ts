import { IProjectEditabled } from '../../hooks/project/private/useEditProject/types'
import schemaProjectFields from '../../schemas/projectFields'
import { IFormCreateProject } from '../../schemas/projectFields/types'

interface IVerifyFields {
  error: {
    message: string
    label: string
    field: string
  } | null
}

const verifyFieldsProject = <T extends IFormCreateProject | IProjectEditabled>(
  fields: T
): IVerifyFields => {
  const error = Object.entries(schemaProjectFields<T>(fields)).find(
    ([, { conditions }]) => {
      return conditions.filter((cond) => cond.condition).length > 0
    }
  )
  if (error) {
    const [field, { label, conditions }] = error
    const conditionInvalid = conditions.find(({ condition }) => condition)

    if (!conditionInvalid)
      return {
        error: null,
      }

    return {
      error: {
        field,
        label,
        message: conditionInvalid.message,
      },
    }
  }

  return {
    error: null,
  }
}

export default verifyFieldsProject
