const search = (nums: number[], target: number): number => {
  let head = 0;
  let tail = nums.length - 1;
  let mid = -1;
  let result = -1;

  while (head <= tail) {
    mid = head + Math.floor((tail - head) / 2);

    if (nums[mid] > target) {
      tail = mid - 1;
    } else if (nums[mid] < target) {
      head = mid + 1;
    } else {
      result = mid;
      break;
    }
  }

  return result;
};

export default search;
