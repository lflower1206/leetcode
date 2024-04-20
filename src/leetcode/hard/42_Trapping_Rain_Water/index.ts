const trap = (height: number[]): number => {
  let result = 0;
  let head = 0;
  let tail = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;

  while (head < tail) {
    if (height[head] < height[tail]) {
      if (height[head] > maxLeft) {
        maxLeft = height[head];
      } else {
        result += maxLeft - height[head];
      }

      head++;
    } else {
      if (height[tail] > maxRight) {
        maxRight = height[tail];
      } else {
        result += maxRight - height[tail];
      }
      tail--;
    }
  }

  return result;
};

export default trap;
