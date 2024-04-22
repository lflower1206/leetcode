import orangesRotting from './index';

describe('994. Rotting Oranges', () => {
  describe('given input grid = [[2,1,1],[1,1,0],[0,1,1]]', () => {
    it('should return 4', () => {
      expect(
        orangesRotting([
          [2, 1, 1],
          [1, 1, 0],
          [0, 1, 1],
        ])
      ).toBe(4);
    });
  });

  describe('given input grid = [[2,1,1],[0,1,1],[1,0,1]]', () => {
    it('should return -1', () => {
      expect(
        orangesRotting([
          [2, 1, 1],
          [0, 1, 1],
          [1, 0, 1],
        ])
      ).toBe(-1);
    });
  });

  describe('given input grid = [[0,2]]', () => {
    it('should return 0', () => {
      expect(orangesRotting([[0, 2]])).toBe(0);
    });
  });
});
