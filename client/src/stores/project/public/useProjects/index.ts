import { create } from 'zustand'

import { type IActions, type IStates } from './types'

const useProjectsStore = create<IActions & IStates>((set) => ({
  projects: null,
  canvasProjects: [],
  statesShowPercentageTechs: {},
  setProjects: (projects) => {
    set({
      canvasProjects: projects ?? [],
      projects,
      statesShowPercentageTechs: projects
        ? Object.fromEntries(projects.map((project) => [project._id, false]))
        : {},
    })
  },
  editStatesShowPercentageTechs: (statesPercentage) => {
    set((state) => ({
      statesShowPercentageTechs: statesPercentage(
        state.statesShowPercentageTechs
      ),
    }))
  },
  filterProjectsOnCanvas: (type) => {
    set((state) => {
      const filteredProjects =
        state.projects?.filter((project) => project.type === type) ?? []
      return {
        canvasProjects:
          type === 'all' ? state.projects ?? [] : filteredProjects,
      }
    })
  },
}))

export default useProjectsStore
