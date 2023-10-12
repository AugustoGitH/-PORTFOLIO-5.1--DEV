import { create } from 'zustand'

import constants from './constants'
import { type IStates, type IActions } from './types'
import createDataDashboard from './utils/createDataDashboard'
import orderPresentationOfProjects from '../../../../utils/project/orderPresentationOfProjects'
import { IProjectPrivate } from '../../../../types/Project'
import { queryClient } from '../../../../queries/queryClient'
import keysQuery from '../../../../queries/constants/keysQuery'

const useProjectsStore = create<IStates & IActions>((set) => ({
  projects: null,
  dataDashboard: null,

  setProjects: (projects) => {
    set({
      projects,
      dataDashboard: projects ? createDataDashboard(projects) : null,
    })
  },
  addProject: (project) => {
    set((state) => {
      const { projects } = state
      if (projects) {
        const projectsOrdened = orderPresentationOfProjects<IProjectPrivate>([
          ...projects,
          project,
        ])

        queryClient.invalidateQueries([keysQuery.PROJECTS_PUBLIC])

        return {
          projects: projectsOrdened,
          dataDashboard: createDataDashboard(projectsOrdened),
        }
      }
      return {}
    })
  },
  deleteProject: (idProject) => {
    set((state) => {
      const { projects } = state
      if (projects) {
        const projectsNotExclude = projects.filter(
          (project) => project._id !== idProject
        )
        queryClient.invalidateQueries([keysQuery.PROJECTS_PUBLIC])
        return {
          projects: projectsNotExclude,
          dataDashboard: createDataDashboard(projectsNotExclude),
        }
      }
      return {}
    })
  },
  setDataDashboard: (projects) => {
    set({
      dataDashboard: projects ? createDataDashboard(projects) : null,
    })
  },
  updateProject: (idProject, fieldsEdit) => {
    set((state) => {
      const { projects } = state
      if (!projects) {
        throw new Error(constants.error.ERROR_UPDATE_DOM_PROJECT_PRE_LOADING)
      }
      const projectSelected = projects.find(
        (project) => project._id === idProject
      )

      if (!projectSelected) {
        throw new Error(constants.error.ERROR_UPDATE_DOM_PROJECT_NOT_FOUNDED)
      }

      const newProjectEdited = Object.assign(projectSelected, fieldsEdit)
      const projectCopy = projects.slice()
      const idsProject = projectCopy.map((project) => project._id)
      projectCopy.splice(idsProject.indexOf(idProject), 1, newProjectEdited)
      queryClient.invalidateQueries([keysQuery.PROJECTS_PUBLIC])

      return {
        projects: projectCopy,
      }
    })
  },
}))

export default useProjectsStore
