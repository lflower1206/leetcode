const twoSum = (numbers: number[], target: number): number[] => {
  let result: number[] = [];
  let head = 0;
  let tail = numbers.length - 1;

  while (head < tail) {
    const sum = numbers[head] + numbers[tail];

    if (sum === target) {
      result = [head + 1, tail + 1];
      break;
    } else {
      sum < target ? head++ : tail--;
    }
  }

  return result;
};

export default twoSum;
