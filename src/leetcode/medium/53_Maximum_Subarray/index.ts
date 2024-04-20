const maxSubArray = (nums: number[]): number => {
  let result = nums[0];
  let temp = nums[0];

  for (let index = 1; index < nums.length; index++) {
    temp = Math.max(temp + nums[index], nums[index]);
    result = Math.max(result, temp);
  }
  return result;
};

export default maxSubArray;
