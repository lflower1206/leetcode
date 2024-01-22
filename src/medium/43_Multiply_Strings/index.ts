const RADIX = 10;
const multiply = (num1: string, num2: string): string => {
  const result: number[] = new Array(num1.length + num2.length).fill(0);

  for (let num1Index = num1.length - 1; num1Index >= 0; num1Index--) {
    const multiplicand = parseInt(num1.charAt(num1Index), RADIX);

    for (let num2Index = num2.length - 1; num2Index >= 0; num2Index--) {
      const multiplier = parseInt(num2.charAt(num2Index), RADIX);
      const product = multiplicand * multiplier;
      const nextResultIndex = num1Index + num2Index;
      const currentResultIndex = nextResultIndex + 1;
      const sum = product + result[currentResultIndex];

      result[currentResultIndex] = sum % RADIX;
      result[nextResultIndex] =
        Math.floor(sum / RADIX) + result[nextResultIndex];
    }
  }

  const firstNonZeroIndex = result.findIndex((num) => num > 0);
  const validResult = result.slice(firstNonZeroIndex, result.length);

  return validResult.length === 0 ? '0' : validResult.join('');
};

export default multiply;
