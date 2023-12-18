const separator = '#';
const longestPalindrome = (input: string): string => {
  if (input.length === 1) {
    return input;
  }

  // using Manacher’s Algorithm
  const filledCharset = input.split('').reduce<string[]>(
    (previousValue, currentValue) => {
      previousValue.push(currentValue);
      previousValue.push(separator);

      return previousValue;
    },
    [separator]
  );
  let maxLspLength = 0;
  let indexHasMaxLength = 0;

  /**
   * first and last is separator and there length are always 0,
   * and there is no need to check rest of elements if rest of length is less than maxLspLen,
   * so start index is 1, last index is filledCharset.length - 2 - maxLspLength.
   * */
  for (
    let index = 1;
    index <= filledCharset.length - 2 - maxLspLength;
    index++
  ) {
    let lspLength = 1;
    let leftChar = filledCharset[index - lspLength];
    let rightChar = filledCharset[index + lspLength];
    let isSame = leftChar === rightChar && leftChar !== undefined;

    while (isSame) {
      lspLength += 1;
      leftChar = filledCharset[index - lspLength];
      rightChar = filledCharset[index + lspLength];
      isSame = leftChar === rightChar && leftChar !== undefined;
    }

    if (lspLength > maxLspLength) {
      maxLspLength = lspLength - 1; // remove starter
      indexHasMaxLength = index;
    }
  }

  return input.slice(
    (indexHasMaxLength - maxLspLength) / 2,
    (indexHasMaxLength + maxLspLength) / 2
  );
};

export default longestPalindrome;
