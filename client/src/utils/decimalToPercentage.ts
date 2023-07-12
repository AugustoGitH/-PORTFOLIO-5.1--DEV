const decimalToPercentage = (
  objDecimals: Record<string, number>
): Record<string, number> => {
  const sumOfDecimalValues = Object.entries(objDecimals)
    .map(([, value]) => value)
    .reduce((acc, curr) => curr + acc, 0);

  const percentageTrated = Object.fromEntries(
    Object.entries(objDecimals).map(([key, value]) => [
      key,
      Math.round((100 * value) / sumOfDecimalValues)
    ])
  );

  const orderPercentageTrated = Object.fromEntries(
    Object.entries(percentageTrated).sort(
      ([, valueA], [, valueB]) => valueB - valueA
    )
  );
  return orderPercentageTrated;
};

export default decimalToPercentage;
