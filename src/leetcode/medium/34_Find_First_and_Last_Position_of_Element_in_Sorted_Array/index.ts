const findFirstAndLast = (
  input: number[],
  target: number,
  startIndex: number
): [number, number] => {
  let first = startIndex;
  let last = startIndex;

  while (input[first - 1] === target || input[last + 1] === target) {
    if (input[first - 1] === target) {
      first -= 1;
    }

    if (input[last + 1] === target) {
      last += 1;
    }
  }

  return [first, last];
};
const NOT_FOUND = [-1, -1];
const searchRange = (input: number[], target: number): number[] => {
  if (input.length === 0) {
    return NOT_FOUND;
  }

  if (input.length === 1) {
    return input[0] === target ? [0, 0] : NOT_FOUND;
  }

  let leftIndex = 0;
  let rightIndex = input.length - 1;
  let midIndex = -1;
  let isFound = false;

  while (leftIndex <= rightIndex) {
    midIndex = leftIndex + Math.ceil((rightIndex - leftIndex) / 2);

    if (input[midIndex] === target) {
      isFound = true;
      break;
    }

    if (target < input[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return isFound ? findFirstAndLast(input, target, midIndex) : NOT_FOUND;
};

export default searchRange;
