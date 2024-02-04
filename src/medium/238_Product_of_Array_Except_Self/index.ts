const productFromLeft = (nums: number[], result: number[]): void => {
  result.push(1);
  for (let index = 1; index < nums.length; index++) {
    result.push(result[index - 1] * nums[index - 1]);
  }
};

const productFromRight = (nums: number[], result: number[]): void => {
  let right = 1;

  for (let index = nums.length - 1; index >= 0; index--) {
    const product = result[index] * right;
    result[index] = Object.is(product, -0) ? 0 : product;
    right *= nums[index];
  }
};

const productExceptSelf = (nums: number[]): number[] => {
  const result: number[] = [];
  productFromLeft(nums, result);
  productFromRight(nums, result);
  return result;
};

export default productExceptSelf;
