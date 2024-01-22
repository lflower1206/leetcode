const DIGIT_CHAR_MAPPING: Record<string, string[]> = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};
const letterCombinations = (input: string): string[] => {
  if (input.length === 0) {
    return [];
  }

  if (input.length === 1) {
    return DIGIT_CHAR_MAPPING[input];
  }

  const [firstLetter, ...restLetters] = input.split('');

  return restLetters.reduce((previousValue, currentValue, index) => {
    const nextLetters = DIGIT_CHAR_MAPPING[currentValue];
    const nextValues = previousValue.map((currentLetter) => {
      return Array(nextLetters.length)
        .fill(currentLetter)
        .map((letter, index) => letter + nextLetters[index]);
    });

    return nextValues.flat();
  }, DIGIT_CHAR_MAPPING[firstLetter]);
};

export default letterCombinations;
