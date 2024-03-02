const findMin = (nums: number[]): number => {
  let result = nums[0];
  let head = 0;
  let tail = nums.length - 1;

  while (head <= tail) {
    const mid = Math.floor((head + tail) / 2);

    if (nums[tail] > nums[head]) {
      return Math.min(result, nums[head]);
    }

    result = Math.min(result, nums[mid]);

    if (nums[mid] >= nums[head]) {
      head = mid + 1;
    } else {
      tail = mid - 1;
    }
  }

  return result;
};

export default findMin;
