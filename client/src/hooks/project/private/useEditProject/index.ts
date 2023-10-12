import { useEffect, useState } from 'react'

import {
  type IReturnCompareEditValues,
  type IProjectEditabled,
  type IUseEditProject,
  type IStateInputsEdit,
  IAlertDialog,
} from './types'
import compareEditValues from './utils/compareEditValues'
import { IProjectPrivate } from '../../../../types/Project'
import useProjectsStore from '../../../../stores/project/private/useProjects'

import deleteProjectService from '../../../../services/authLevel/private/deleteProject'
import updateProjectService from '../../../../services/authLevel/private/updateProject'
import verifyFieldsProject from '../../../../utils/project/verifyFieldsProject'

const useEditProject = (project: IProjectPrivate): IUseEditProject => {
  const [originValues, setOriginValues] = useState<IProjectEditabled>({
    orderOfFive: project.orderOfFive,
    name: project.name,
    websiteLink: project.websiteLink,
    videoLink: project.videoLink,
    type: project.type,
    technologiesUsed: project.technologiesUsed,
    repoId: project.repoId,
    repoLink: project.repoLink,
  })

  const [statesInputEdit, setStatesInputEdit] = useState<IStateInputsEdit>({
    name: false,
    websiteLink: false,
    videoLink: false,
    repoId: false,
    repoLink: false,
  })

  const [alertDialog, setAlertDialog] = useState<IAlertDialog>({
    error: false,
    title: '',
    message: '',
    show: false,
  })

  const [valuesProject, setValuesProject] =
    useState<IProjectEditabled>(originValues)

  const [comparisons, setComparisons] =
    useState<IReturnCompareEditValues | null>(null)

  const [isEdited, setIsEdited] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { deleteProject, updateProject } = useProjectsStore()

  useEffect(() => {
    const compare = compareEditValues(valuesProject, originValues)
    setComparisons(compare)
    setIsEdited(compare.modified)
  }, [valuesProject])

  const addEditedValues = (
    attr: keyof IProjectEditabled,
    newValue: any
  ): void => {
    setValuesProject((prevValues) => ({
      ...prevValues,
      [attr]: newValue,
    }))
  }

  const handleToggleStateInputEdit = (field: keyof IStateInputsEdit): void => {
    setStatesInputEdit((prevStates) => ({
      ...prevStates,
      [field]: !prevStates[field],
    }))
  }

  const resetStatesInputsEdit = (): void => {
    setStatesInputEdit(
      (prevStates) =>
        Object.fromEntries(
          Object.entries(prevStates).map(([field]) => [field, false])
        ) as IStateInputsEdit
    )
  }

  const handleReloadRepo = async (): Promise<void> => {
    console.log(project._id)
  }

  const handleDeleteProject = async (): Promise<void> => {
    setAlertDialog({
      error: true,
      buttons: {
        action: {
          label: 'Sim',
          on: async () => {
            setAlertDialog((prevAlertD) => ({
              ...prevAlertD,
              show: false,
            }))
            setIsLoading(true)
            const { message, deleted } = await deleteProjectService(project._id)
            alert(message)

            setIsLoading(false)
            if (deleted) {
              deleteProject(project._id)
            }
          },
        },
        close: {
          isActive: true,
          label: 'Não',
        },
      },
      message: 'Você deseja deletar esse projeto?',
      title: 'Aviso!',
      show: true,
    })
  }

  const handleUpdateProject = async (): Promise<void> => {
    const { error } = verifyFieldsProject<IProjectEditabled>(valuesProject)

    if (error) {
      return setAlertDialog({
        show: true,
        title: `Campo '${error.label}'`,
        message: error.message,
        error: true,
        buttons: {
          close: {
            isActive: true,
            label: 'Fechar',
          },
        },
      })
    }
    setIsLoading(true)
    const { updated, message, status } = await updateProjectService({
      ...valuesProject,
      idProject: project._id,
    })
    setAlertDialog({
      show: true,
      message,
      title: `Status ${status}!`,
      error: !updated,
      buttons: {
        close: {
          isActive: true,
          label: 'Fechar',
        },
      },
    })

    setIsLoading(false)
    if (updated) {
      resetUpdate()
      updateProject(project._id, valuesProject)
    }
  }

  const resetUpdate = (): void => {
    setOriginValues(valuesProject)
    setIsEdited(false)
    resetStatesInputsEdit()
  }

  const undoChanges = (): void => {
    setValuesProject(originValues)
    resetStatesInputsEdit()
  }

  return {
    addEditedValues,
    valuesProject,
    handleDeleteProject,
    handleReloadRepo,
    comparisons,
    handleUpdateProject,
    undoChanges,
    isLoading,
    isEdited,
    statesInputEdit,
    handleToggleStateInputEdit,
    alertDialog,
    setAlertDialog,
  }
}

export default useEditProject
