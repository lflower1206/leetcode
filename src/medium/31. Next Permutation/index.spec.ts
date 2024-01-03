import nextPermutation from './index';

describe('31. Next Permutation', () => {
  describe('given input [3,2,1]', () => {
    it('should return [1,2,3]', () => {
      const givenInput = [3, 2, 1];

      nextPermutation(givenInput);

      expect(givenInput).toEqual([1, 2, 3]);
    });
  });

  describe('given input [1,2,3]', () => {
    it('should return [1,3,2]', () => {
      const givenInput = [1, 2, 3];

      nextPermutation(givenInput);

      expect(givenInput).toEqual([1, 3, 2]);
    });
  });

  describe('given input [1,1,5]', () => {
    it('should return [1,5,1]', () => {
      const givenInput = [1, 1, 5];

      nextPermutation(givenInput);

      expect(givenInput).toEqual([1, 5, 1]);
    });
  });
});
