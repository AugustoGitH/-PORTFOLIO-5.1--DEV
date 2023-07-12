

import { IRepositoryTechnologiesPoints } from '../types/Project';
import decimalToPercentage from './decimalToPercentage';

const treatingTechsToShowPercentage = (
  percentagesInDecimalValues: IRepositoryTechnologiesPoints,
  whiteListTechs: string[]
): IRepositoryTechnologiesPoints | null => {
  const techsDecimalInLowerCase = Object.fromEntries(
    Object.entries(percentagesInDecimalValues).map(([tech, value]) => [
      tech.toLowerCase(),
      value
    ])
  );

  const selectedPercentagesWhiteList = Object.fromEntries(
    Object.entries(techsDecimalInLowerCase).filter(([techF]) =>
      whiteListTechs.some((techS) =>
        techS.toLowerCase().includes(techF.toLowerCase())
      )
    )
  );
  const tratedPercentsDecimalToPercentage = decimalToPercentage(
    selectedPercentagesWhiteList
  );

  return Object.keys(tratedPercentsDecimalToPercentage).length > 0
    ? tratedPercentsDecimalToPercentage
    : null;
};

export default treatingTechsToShowPercentage;
