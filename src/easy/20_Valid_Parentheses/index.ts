const isValid = (s: string): boolean => {
  if (s.length <= 1) {
    return false;
  }

  const stack: string[] = [];

  const isPassed = s.split('').every((char) => {
    switch (char) {
      case '(':
      case '[':
      case '{':
        stack.push(char);
        return true;
    }

    switch (char) {
      case ')':
        return stack.pop() === '(';
      case ']':
        return stack.pop() === '[';
      case '}':
        return stack.pop() === '{';
    }
  });

  return stack.length === 0 && isPassed;
};

export default isValid;
