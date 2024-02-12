const isPalindrome = (s: string): boolean => {
  const trimmedInput = s.trim().toLowerCase();

  if (trimmedInput.length <= 1) {
    return true;
  }

  const isWordRegex = /[A-Za-z0-9]/;
  let head = 0;
  let tail = trimmedInput.length - 1;

  while (head <= tail) {
    if (!isWordRegex.test(trimmedInput.charAt(head))) {
      head++;
      continue;
    }

    if (!isWordRegex.test(trimmedInput.charAt(tail))) {
      tail--;
      continue;
    }

    if (trimmedInput.charAt(head) !== trimmedInput.charAt(tail)) {
      return false;
    }

    head++;
    tail--;
  }

  return true;
};

export default isPalindrome;
