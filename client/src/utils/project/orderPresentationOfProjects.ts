import { IProjectPrivate, IProjectPublic } from "../../types/Project";


const orderPresentationOfProjects = <
  T extends IProjectPrivate | IProjectPublic
>(
  projects: T[]
): T[] => {
  const projectsIncludesOrderOfFive = projects.filter(
    (project) => project.orderOfFive > 0
  );

  const projectsIncludesInTheFiveSalaries = projectsIncludesOrderOfFive.sort(
    (a, b) => a.orderOfFive + b.orderOfFive
  );

  const modelFinal = [
    null,
    null,
    null,
    null,
    null,
    ...projects.filter((project) => project.orderOfFive === 0)
  ] as T[];

  projectsIncludesInTheFiveSalaries.forEach(
    (project) => (modelFinal[project.orderOfFive - 1] = project)
  );

  const modelFinalTrated = modelFinal.filter(Boolean);

  return modelFinalTrated;
};

export default orderPresentationOfProjects;
