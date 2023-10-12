import { FormEventHandler, useEffect, useState } from 'react'

import { IAlertDialog, IUseCreateProject, TAllFields } from './types'

import createProjectService from '../../../../services/authLevel/private/createProject'
import useProjectsStore from '../../../../stores/project/private/useProjects'
import { IFormCreateProject } from '../../../../schemas/projectFields/types'
import verifyFieldsProject from '../../../../utils/project/verifyFieldsProject'

const defaultValuesForm: IFormCreateProject = {
  name: '',
  images: {
    cover: '',
    images: [],
  },
  technologiesUsed: [],
  repoId: null,
  repoLink: '',
  type: 'all',
  videoLink: '',
  websiteLink: '',
}

const useCreateProject = (): IUseCreateProject => {
  const [statusForm, setStatusForm] =
    useState<IFormCreateProject>(defaultValuesForm)
  const [isRestarted, setIsRestarted] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const [alertDialog, setAlertDialog] = useState<IAlertDialog>({
    title: '',
    message: '',
    show: false,
    error: false,
  })

  const addProject = useProjectsStore((state) => state.addProject)

  const onChangeField = (name: keyof IFormCreateProject, value: TAllFields) => {
    setStatusForm((prevStatus) => ({ ...prevStatus, [name]: value }))
  }

  useEffect(() => {
    if (isRestarted) {
      setStatusForm(defaultValuesForm)
      setTimeout(() => {
        setIsRestarted(false)
      }, 100)
    }
  }, [isRestarted])

  const onSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault()
    const { error } = verifyFieldsProject<IFormCreateProject>(statusForm)
    if (error) {
      setAlertDialog({
        error: true,
        title: `Campo '${error.label}'.`,
        message: error.message,
        show: true,
      })
      return
    }
    setIsCreating(true)

    const { created, project, message, status } = await createProjectService(
      statusForm
    )
    setIsCreating(false)
    setAlertDialog({
      message,
      show: true,
      error: !created,
      title: `Status ${status} :)`,
    })

    if (created && project) {
      addProject(project)
      setIsRestarted(true)
    }
  }

  return {
    onChangeField,
    statusForm,
    isRestarted,
    onSubmit,
    alertDialog,
    setAlertDialog,
    isCreating,
  }
}

export default useCreateProject
