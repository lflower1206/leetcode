const maxArea = (height: number[]): number => {
  let area = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  while (leftIndex < rightIndex) {
    const tempArea =
      Math.min(height[leftIndex], height[rightIndex]) *
      (rightIndex - leftIndex);
    area = Math.max(area, tempArea);

    // move the side which height is lower
    height[leftIndex] > height[rightIndex] ? rightIndex-- : leftIndex++;
  }

  return area;
};

export default maxArea;
