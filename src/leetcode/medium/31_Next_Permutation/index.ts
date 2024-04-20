const swap = (input: number[], leftIndex: number, rightIndex: number): void => {
  const temp = input[leftIndex];
  input[leftIndex] = input[rightIndex];
  input[rightIndex] = temp;
};

const reverseBySwap = (input: number[], startFrom: number): void => {
  let leftIndex = startFrom;
  let rightIndex = input.length - 1;

  while (leftIndex < rightIndex) {
    swap(input, leftIndex, rightIndex);

    leftIndex++;
    rightIndex--;
  }
};

/**
 Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (input: number[]): void => {
  let firstIndex = -1;
  let secondIndex = -1;

  for (let index = input.length - 1; index >= 0; index--) {
    if (input[index] > input[index - 1]) {
      firstIndex = index - 1;
      break;
    }
  }

  if (firstIndex === -1) {
    reverseBySwap(input, 0);
    return;
  }

  for (let index = input.length - 1; index >= 0; index--) {
    if (input[index] > input[firstIndex]) {
      secondIndex = index;
      break;
    }
  }

  swap(input, firstIndex, secondIndex);
  reverseBySwap(input, firstIndex + 1);
};

export default nextPermutation;
