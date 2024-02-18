const isMapEqual = (
  s1Map: Map<string, number>,
  s2Map: Map<string, number>
): boolean => {
  return Array.from(s1Map.entries()).every(([char, count]) => {
    return s2Map.has(char) && s2Map.get(char)! === count;
  });
};

const checkInclusion = (s1: string, s2: string): boolean => {
  const permutationStringLength = s1.length;
  const charCountS1Map = s1.split('').reduce((map, char) => {
    map.set(char, (map.get(char) ?? 0) + 1);
    return map;
  }, new Map<string, number>());
  const charCountS2Map = new Map<string, number>();

  let head = 0;
  let tail = 0;
  let result = false;
  let matchedLength = 0;

  while (head + matchedLength <= s2.length && tail < s2.length) {
    const tailChar = s2.charAt(tail);

    charCountS2Map.set(tailChar, (charCountS2Map.get(tailChar) ?? 0) + 1);
    matchedLength = tail - head + 1;

    if (matchedLength === permutationStringLength) {
      result = isMapEqual(charCountS1Map, charCountS2Map);

      if (result) {
        break;
      }

      const headChar = s2.charAt(head);

      charCountS2Map.set(headChar, charCountS2Map.get(headChar)! - 1);
      head++;
    }

    tail++;
  }

  return result;
};

export default checkInclusion;
