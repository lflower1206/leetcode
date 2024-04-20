import evalRPN from './index';

describe('150. Evaluate Reverse Polish Notation', () => {
  describe('given input tokens = ["2","1","+","3","*"]', () => {
    it('should return 9', () => {
      expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
    });
  });

  describe('given input tokens = ["4","13","5","/","+"]', () => {
    it('should return 6', () => {
      expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
    });
  });

  describe('given input tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', () => {
    it('should return 22', () => {
      expect(
        evalRPN([
          '10',
          '6',
          '9',
          '3',
          '+',
          '-11',
          '*',
          '/',
          '*',
          '17',
          '+',
          '5',
          '+',
        ])
      ).toBe(22);
    });
  });

  describe('given input tokens = ["4","3","-"]', () => {
    it('should return 22', () => {
      expect(evalRPN(['4', '3', '-'])).toBe(1);
    });
  });
});
