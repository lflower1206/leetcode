const binarySearch = (nums: number[], target: number): boolean => {
  let isFound = false;
  let head = 0;
  let tail = nums.length - 1;
  let mid = -1;

  while (head <= tail) {
    mid = head + Math.ceil((tail - head) / 2);

    if (nums[mid] < target) {
      head = mid + 1;
    } else if (nums[mid] > target) {
      tail = mid - 1;
    } else {
      isFound = true;
      break;
    }
  }

  return isFound;
};
const searchMatrix = (matrix: number[][], target: number): boolean => {
  const targetRow = matrix.find((row) => {
    return row[0] <= target && target <= row[row.length - 1];
  });

  if (targetRow === undefined) {
    return false;
  }

  return binarySearch(targetRow, target);
};

export default searchMatrix;
