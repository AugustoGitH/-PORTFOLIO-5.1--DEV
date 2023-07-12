import {
  type IProjectEditabled,
  type IResultCompare,
  type IReturnCompareEditValues
} from '../types';

const compareArrays = (array1: string[], array2: string[]): boolean => {
  return (
    array1.filter((ay1) => !array2.includes(ay1)).length === 0 &&
    array1.length === array2.length
  );
};

const compareEditValues = (
  editedValues: IProjectEditabled,
  project: IProjectEditabled
): IReturnCompareEditValues => {
  const originalValueTrated = Object.fromEntries(
    Object.entries(project).filter(([prop]) =>
      Object.keys(editedValues).includes(prop)
    )
  );

  const comparisons: IResultCompare[] = Object.entries(originalValueTrated).map(
    ([prop, value]) => {
      const valueEdited = editedValues[prop as keyof IProjectEditabled];
      return {
        valueOriginal: value,
        valueEdited,
        condition:
          Array.isArray(value) && Array.isArray(valueEdited)
            ? compareArrays(value, valueEdited)
            : String(value) === String(valueEdited)
      };
    }
  );

  return {
    comparisons,
    modified: !comparisons.every((comp) => comp.condition)
  };
};

export default compareEditValues;
