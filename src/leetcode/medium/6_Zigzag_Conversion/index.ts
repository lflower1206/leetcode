const convert = (input: string, numRows: number): string => {
  if (numRows === 1 || input.length <= numRows) {
    return input;
  }

  const convertTable: string[][] = Array(numRows)
    .fill(null)
    .map(() => []);
  const charset = input.split('');
  let isGoDown = true;
  let secondDimensionIndex = 1;

  convertTable[0].push(charset[0]);

  for (let index = 1; index < charset.length; index++) {
    convertTable[secondDimensionIndex].push(charset[index]);

    if (secondDimensionIndex === numRows - 1) {
      isGoDown = false;
    } else if (secondDimensionIndex === 0) {
      isGoDown = true;
    }

    secondDimensionIndex = isGoDown
      ? secondDimensionIndex + 1
      : secondDimensionIndex - 1;
  }

  return convertTable.flat().join('');
};

export default convert;
