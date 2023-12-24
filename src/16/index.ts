const moveToNonDuplicateIndex = (
  input: number[],
  currentIndex: number,
  step: 1 | -1
): number => {
  let nonDuplicateIndex = currentIndex + step;

  while (nonDuplicateIndex < input.length) {
    if (input[currentIndex] !== input[nonDuplicateIndex]) {
      break;
    }

    nonDuplicateIndex = nonDuplicateIndex + step;
  }

  return nonDuplicateIndex;
};
const threeSumClosest = (input: number[], target: number): number => {
  const sortedInput = input.slice().sort((a, b) => a - b);
  const lastStartIndex = input.length - 2;
  let firstIndex = 0;
  let secondIndex = 0;
  let thirdIndex = 0;
  let diff = Number.POSITIVE_INFINITY;
  let closestSum = 0;
  let tempSum = 0;
  let tempDiff = 0;

  while (firstIndex < lastStartIndex) {
    secondIndex = firstIndex + 1;
    thirdIndex = sortedInput.length - 1;

    while (secondIndex < thirdIndex) {
      tempSum =
        sortedInput[firstIndex] +
        sortedInput[secondIndex] +
        sortedInput[thirdIndex];
      tempDiff = Math.abs(target - tempSum);

      if (diff > tempDiff) {
        diff = tempDiff;
        closestSum = tempSum;
      }

      tempSum < target ? secondIndex++ : thirdIndex--;
    }

    if (diff === 0) {
      break;
    }

    firstIndex = moveToNonDuplicateIndex(sortedInput, firstIndex, 1);
  }

  return closestSum;
};

export default threeSumClosest;
