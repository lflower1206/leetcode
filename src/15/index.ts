const TARGET = 0;
const threeSum = (input: number[]): number[][] => {
  const result = new Set<string>();
  const sortedInput = input.slice().sort((a, b) => a - b);
  const lastStartIndex = input.length - 2;

  for (let firstIndex = 0; firstIndex < lastStartIndex; firstIndex++) {
    let secondIndex = firstIndex + 1;
    let thirdIndex = sortedInput.length - 1;

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
        secondIndex++;
        thirdIndex--;
      } else {
        sum < TARGET ? secondIndex++ : thirdIndex--;
      }
    }
  }

  return JSON.parse(`[${Array.from(result).join(',')}]`);
};

export default threeSum;
