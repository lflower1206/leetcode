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

const fourSum = (input: number[], target: number): number[][] => {
  const result: number[][] = [];
  const duplicateCheckMap = new Map<string, boolean>();
  const sortedInput = input.slice().sort((a, b) => a - b);

  for (let firstIndex = 0; firstIndex < sortedInput.length - 3; firstIndex++) {
    const firstValue = sortedInput[firstIndex];

    for (
      let secondIndex = firstIndex + 1;
      secondIndex < sortedInput.length - 2;
      secondIndex++
    ) {
      const secondValue = sortedInput[secondIndex];
      let thirdIndex = secondIndex + 1;
      let forthIndex = sortedInput.length - 1;

      while (thirdIndex < forthIndex) {
        const thirdValue = sortedInput[thirdIndex];
        const forthValue = sortedInput[forthIndex];
        const key = `${firstValue}${secondValue}${thirdValue}${forthValue}`;
        const sum = firstValue + secondValue + thirdValue + forthValue;

        if (sum === target && !duplicateCheckMap.has(key)) {
          duplicateCheckMap.set(key, true);
          result.push([firstValue, secondValue, thirdValue, forthValue]);
          thirdIndex = moveToNonDuplicateIndex(sortedInput, thirdIndex, 1);
          forthIndex = moveToNonDuplicateIndex(sortedInput, forthIndex, -1);
        } else if (sum > target) {
          forthIndex = moveToNonDuplicateIndex(sortedInput, forthIndex, -1);
        } else {
          thirdIndex = moveToNonDuplicateIndex(sortedInput, thirdIndex, 1);
        }
      }
    }
  }

  return result;
};

export default fourSum;
