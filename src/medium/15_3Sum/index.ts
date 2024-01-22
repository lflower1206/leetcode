const TARGET = 0;
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
const threeSum = (input: number[]): number[][] => {
  const result = new Set<string>();
  const sortedInput = input.slice().sort((a, b) => a - b);
  const lastStartIndex = input.length - 2;
  let firstIndex = 0;
  let secondIndex = 0;
  let thirdIndex = 0;

  while (firstIndex < lastStartIndex) {
    secondIndex = firstIndex + 1;
    thirdIndex = sortedInput.length - 1;

    while (secondIndex < thirdIndex) {
      const sum =
        sortedInput[firstIndex] +
        sortedInput[secondIndex] +
        sortedInput[thirdIndex];

      if (sum === TARGET) {
        result.add(
          JSON.stringify([
            sortedInput[firstIndex],
            sortedInput[secondIndex],
            sortedInput[thirdIndex],
          ])
        );
        secondIndex = moveToNonDuplicateIndex(sortedInput, secondIndex, 1);
        thirdIndex = moveToNonDuplicateIndex(sortedInput, thirdIndex, -1);
      } else {
        sum < TARGET ? secondIndex++ : thirdIndex--;
      }
    }

    firstIndex = moveToNonDuplicateIndex(sortedInput, firstIndex, 1);
  }

  return JSON.parse(`[${Array.from(result).join(',')}]`);
};

export default threeSum;
