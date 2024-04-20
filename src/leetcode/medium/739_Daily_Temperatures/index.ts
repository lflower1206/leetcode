const dailyTemperatures = (temperatures: number[]): number[] => {
  const stack: number[] = [];
  const result: number[] = Array(temperatures.length).fill(0);

  for (let index = temperatures.length - 1; index >= 0; index--) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[index]
    ) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[index] = stack[stack.length - 1] - index;
    }

    stack.push(index);
  }

  return result;
};

export default dailyTemperatures;
