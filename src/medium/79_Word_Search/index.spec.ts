import exist from './index';

describe('79. Word Search', () => {
  describe('given board [[A]] and word A', () => {
    it('should return true', () => {
      expect(exist([['A']], 'A')).toBeTruthy();
    });
  });

  describe('given board [[A]] and word B', () => {
    it('should return false', () => {
      expect(exist([['A']], 'B')).toBeFalsy();
    });
  });

  describe('given board [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]] and word ABCCED', () => {
    it('should return false', () => {
      expect(
        exist(
          [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
          ],
          'ABCCED'
        )
      ).toBeTruthy();
    });
  });

  describe('given board [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]] and word SEE', () => {
    it('should return false', () => {
      expect(
        exist(
          [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
          ],
          'SEE'
        )
      ).toBeTruthy();
    });
  });
});
