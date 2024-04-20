import generateParenthesis from './index';

describe('22. Generate Parentheses', () => {
  describe('given input 1', () => {
    it('should return ["()"]', () => {
      expect(generateParenthesis(1)).toEqual(['()']);
    });
  });

  describe('given input 3', () => {
    it('should return ["((()))","(()())","(())()","()(())","()()()"]', () => {
      expect(generateParenthesis(3)).toEqual([
        '((()))',
        '(()())',
        '(())()',
        '()(())',
        '()()()',
      ]);
    });
  });
});
