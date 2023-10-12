import { IProjectPrivate, IProjectPublic } from '../../types/Project'

const orderProjectsInOrderOfCreation = <
  T extends IProjectPrivate | IProjectPublic
>(
  projects: T[]
): T[] => {
  const projectsOrder = [...projects].sort((a, b) => {
    const dataCreationA = new Date(a.createdAt).getTime()
    const dataCreationB = new Date(b.createdAt).getTime()
    return dataCreationB - dataCreationA
  })
  return projectsOrder
}

const orderPresentationOfProjects = <
  T extends IProjectPrivate | IProjectPublic
>(
  projects: T[]
): T[] => {
  const projectsIncludesOrderOfFive = projects.filter(
    (project) => project.orderOfFive > 0
  )

  const projectsIncludesInTheFiveSalaries = [
    ...projectsIncludesOrderOfFive,
  ].sort((a, b) => a.orderOfFive + b.orderOfFive)

  const modelFinal = [
    null,
    null,
    null,
    null,
    null,
    ...orderProjectsInOrderOfCreation<T>(
      projects.filter((project) => project.orderOfFive === 0)
    ),
  ] as T[]

  projectsIncludesInTheFiveSalaries.forEach(
    (project) => (modelFinal[project.orderOfFive - 1] = project)
  )

  const modelFinalTrated = modelFinal.filter(Boolean)

  return modelFinalTrated
}

export default orderPresentationOfProjects
