export const getRandomNumber = (minValue: number, maxValue: number) =>
  Math.round(
    parseFloat(
      Math.min(
        minValue + Math.random() * (maxValue - minValue),
        maxValue,
      ).toFixed(2),
    ) * 2,
  ) / 2;
