const search = (input: number[], target: number): number => {
  let leftIndex = 0;
  let rightIndex = input.length - 1;
  let midIndex = -1;
  let result = -1;

  while (leftIndex <= rightIndex) {
    midIndex = leftIndex + Math.ceil((rightIndex - leftIndex) / 2);

    if (input[midIndex] === target) {
      result = midIndex;
      break;
    }

    if (input[leftIndex] < input[midIndex]) {
      if (input[leftIndex] <= target && target <= input[midIndex]) {
        rightIndex = midIndex - 1;
      } else {
        leftIndex = midIndex + 1;
      }
    } else {
      if (input[midIndex] <= target && target <= input[rightIndex]) {
        leftIndex = midIndex + 1;
      } else {
        rightIndex = midIndex - 1;
      }
    }
  }

  return result;
};

export default search;
