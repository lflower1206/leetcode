const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = new Map<string, number>();
  let isAnagramFlag = true;

  for (let index = 0; index < s.length; index++) {
    const char = s.charAt(index);
    const count = charCount.get(char) ?? 0;

    charCount.set(char, count + 1);
  }

  for (let index = 0; index < s.length; index++) {
    const char = t.charAt(index);
    const count = charCount.get(char) ?? 0;
    const nextCount = count - 1;

    if (nextCount < 0) {
      isAnagramFlag = false;
      break;
    }

    charCount.set(char, nextCount);
  }

  return isAnagramFlag;
};

export default isAnagram;
