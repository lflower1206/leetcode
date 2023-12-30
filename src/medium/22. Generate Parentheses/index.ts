interface GenerateParams {
  input: string;
  parenthesis: string[];
  length: number;
  pairLength: number;
  stackSize: number;
}
const generate = (params: GenerateParams): void => {
  const { input, parenthesis, length, pairLength, stackSize } = params;

  if (stackSize < 0 || input.length > pairLength) {
    return;
  }

  if (stackSize === 0 && input.length === pairLength) {
    parenthesis.push(input);
    return;
  }

  generate({
    input: `${input}(`,
    length,
    pairLength,
    parenthesis,
    stackSize: stackSize + 1,
  });

  generate({
    input: `${input})`,
    length,
    pairLength,
    parenthesis,
    stackSize: stackSize - 1,
  });
};
const generateParenthesis = (length: number): string[] => {
  const parenthesis: string[] = [];

  generate({
    input: '',
    length,
    pairLength: length * 2,
    parenthesis,
    stackSize: 0,
  });

  return parenthesis;
};

export default generateParenthesis;
