const maxProduct = (nums: number[]): number => {
  let result = nums[0];
  let tempMax = result;
  let tempMin = result;

  for (let index = 1; index < nums.length; index++) {
    const num = nums[index];

    if (num < 0) {
      [tempMax, tempMin] = [tempMin, tempMax];
    }

    tempMax = Math.max(tempMax * num, num);
    tempMin = Math.min(tempMin * num, num);

    result = Math.max(result, tempMax);
  }

  return result;
};

export default maxProduct;
