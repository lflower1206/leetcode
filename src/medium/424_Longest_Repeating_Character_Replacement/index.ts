const characterReplacement = (s: string, k: number): number => {
  const countMap = new Map<string, number>();
  let head = 0;
  let tail = 0;
  let result = 0;
  let maxCharCount = 0;

  for (; tail < s.length; tail++) {
    const tailChar = s.charAt(tail);
    const charCount = (countMap.get(tailChar) ?? 0) + 1;

    countMap.set(tailChar, charCount);
    maxCharCount = Math.max(maxCharCount, charCount);

    if (tail - head + 1 - maxCharCount > k) {
      const hearChar = s.charAt(head);
      countMap.set(hearChar, countMap.get(hearChar)! - 1);
      head++;
    }

    result = Math.max(result, tail - head + 1);
  }

  return result;
};

export default characterReplacement;
