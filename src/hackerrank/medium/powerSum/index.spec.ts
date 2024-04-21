import powerSum from './index';

describe('Power Sum', () => {
  describe('given input X = 10, N = 2', () => {
    it('should return 1', () => {});
    expect(powerSum(10, 2)).toBe(1);
  });

  describe('given input X = 100, N = 2', () => {
    it('should return 3', () => {
      expect(powerSum(100, 2)).toBe(3);
    });
  });
});
