import trap from './index';

describe('42. Trapping Rain Water', () => {
  describe('given input height = [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    it('should return 6', () => {
      expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    });
  });

  describe('given input height = [4,2,0,3,2,5]', () => {
    it('should return 9', () => {
      expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
    });
  });
});
