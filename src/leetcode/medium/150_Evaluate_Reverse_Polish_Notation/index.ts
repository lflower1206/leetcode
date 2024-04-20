const operatorMap = new Map([
  ['+', (firstValue: number, secondValue: number) => firstValue + secondValue],
  ['-', (firstValue: number, secondValue: number) => secondValue - firstValue],
  ['*', (firstValue: number, secondValue: number) => firstValue * secondValue],
  [
    '/',
    (firstValue: number, secondValue: number) => (secondValue / firstValue) | 0,
  ],
]);
const evalRPN = (tokens: string[]): number => {
  const stack: number[] = [];

  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    if (operatorMap.has(token)) {
      stack.push(operatorMap.get(token)!(stack.pop()!, stack.pop()!));
      continue;
    }

    stack.push(parseInt(token, 10));
  }

  return stack.pop()!;
};

export default evalRPN;
