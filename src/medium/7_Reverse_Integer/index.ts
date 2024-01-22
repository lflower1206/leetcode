const MAX_NUMBER = 2147483647;
const MIN_NUMBER = -2147483647;
export const reverseBySwap = (x: number): number => {
  if (x < 10 && x > -10) {
    return x;
  }

  const inputArray = Math.abs(x).toString(10).split('');
  const middleIndex = Math.ceil(inputArray.length / 2);
  let headIndex = 0;
  let tailIndex = inputArray.length - 1;

  for (; headIndex < middleIndex; headIndex++) {
    const temp = inputArray[headIndex];
    inputArray[headIndex] = inputArray[tailIndex];
    inputArray[tailIndex] = temp;
    tailIndex--;
  }

  const result =
    x >= 0
      ? parseInt(inputArray.join(''), 10)
      : parseInt(inputArray.join(''), 10) * -1;

  if (result > MAX_NUMBER || result < MIN_NUMBER) {
    return 0;
  }

  return result;
};

export const reverseByCalculation = (x: number): number => {
  if (x < 10 && x > -10) {
    return x;
  }

  let input = Math.abs(x);
  let result = 0;

  while (input !== 0) {
    result = result * 10 + (input % 10);
    input = Math.floor(input / 10);
  }

  if (result > MAX_NUMBER || result < MIN_NUMBER) {
    return 0;
  }

  return x >= 0 ? result : result * -1;
};
