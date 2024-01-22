const MAX_NUMBER = 2147483647;
const MIN_NUMBER = -2147483648;
const ALLOWED_CHARS: Record<string, boolean> = {
  '+': true,
  '-': true,
  '0': true,
  '1': true,
  '2': true,
  '3': true,
  '4': true,
  '5': true,
  '6': true,
  '7': true,
  '8': true,
  '9': true,
};
const myAtoi = (input: string): number => {
  const charset = input.trim().split('');

  if (!ALLOWED_CHARS[charset[0]]) {
    return 0;
  }

  const numberChars: string[] = [charset[0]];
  let index = 1;

  while (true) {
    const char = charset[index++];
    if (ALLOWED_CHARS[char]) {
      numberChars.push(char);
      continue;
    }

    // already find number but the char is not allowed
    if (numberChars.length > 0) {
      break;
    }
  }

  const result = parseInt(numberChars.join(''), 10);

  if (isNaN(result)) {
    return 0;
  }

  return result >= 0
    ? Math.min(MAX_NUMBER, result)
    : Math.max(MIN_NUMBER, result);
};

export default myAtoi;
