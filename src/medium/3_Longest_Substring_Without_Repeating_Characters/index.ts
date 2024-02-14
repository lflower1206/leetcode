const lengthOfLongestSubstring = (s: string): number => {
  const map = new Map<string, number>();
  let result = 0;
  let index = 0;
  let start = 0;

  while (index < s.length) {
    const char = s.charAt(index);

    if (map.has(char)) {
      start = Math.max(start, map.get(char)! + 1);
    }

    map.set(char, index);
    result = Math.max(result, index - start + 1);
    index++;
  }

  return result;
};

export default lengthOfLongestSubstring;
