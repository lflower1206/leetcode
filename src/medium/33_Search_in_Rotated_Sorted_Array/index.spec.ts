import search from './index';

describe('33. Search in Rotated Sorted Array', () => {
  describe('given input [1], target = 1', () => {
    it('should  return 0', () => {
      expect(search([1], 1)).toEqual(0);
    });
  });

  describe('given input [1], target = 0', () => {
    it('should  return -1', () => {
      expect(search([1], 0)).toEqual(-1);
    });
  });

  describe('given input [4,5,6,7,0,1,2], target = 0', () => {
    it('should  return 4', () => {
      expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
    });
  });

  describe('given input [4,5,6,7,0,1,2], target = 3', () => {
    it('should  return -1', () => {
      expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
    });
  });

  describe('given input [3,1], target = 1', () => {
    it('should  return -1', () => {
      expect(search([3, 1], 1)).toEqual(1);
    });
  });
});
