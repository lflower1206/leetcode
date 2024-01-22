const sort = (input: string): string => {
  return input
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join();
};

const groupAnagrams = (strings: string[]): string[][] => {
  const map = new Map<string, string[]>();

  strings.forEach((str) => {
    const sorted = sort(str);

    if (!map.has(sorted)) {
      map.set(sorted, []);
    }

    map.get(sorted)!.push(str);
  });

  return Array.from(map.values());
};

export default groupAnagrams;
