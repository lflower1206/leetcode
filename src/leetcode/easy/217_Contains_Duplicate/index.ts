const containsDuplicate = (nums: number[]): boolean => {
  const duplicateNumbers = new Map<number, boolean>();

  return nums.some((num) => {
    if (duplicateNumbers.has(num)) {
      return true;
    }

    duplicateNumbers.set(num, true);
    return false;
  });
};

export default containsDuplicate;
