export const getFraction = (wholeUnits: number, elementUnits: number) => {
  return elementUnits / wholeUnits;
};

export const numberToPercent = (num: number) => {
  return `${num * 100}%`;
};
