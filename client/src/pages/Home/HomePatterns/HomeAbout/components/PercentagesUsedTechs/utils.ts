import { IRepositoryTechnologiesPoints } from "../../../../../../types/Project";


export const sumPercentagesOfTechnologies = (
  percentagesTech: IRepositoryTechnologiesPoints[]
): IRepositoryTechnologiesPoints => {
  const sumOfPercentages: Record<string, number> = {};
  percentagesTech.forEach((techs) => {
    for (const tech in techs) {
      sumOfPercentages[tech] = (sumOfPercentages[tech] ?? 0) + techs[tech];
    }
  });

  return sumOfPercentages;
};
