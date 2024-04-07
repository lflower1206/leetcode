import solve from './index';

describe('130. Surrounded Regions', () => {
  describe('given input board = [["X"]]', () => {
    it('should return [["X"]]', () => {
      const givenBoard = [['X']];

      solve(givenBoard);

      expect(givenBoard).toEqual([['X']]);
    });
  });

  describe('given input board = [["O"]]', () => {
    it('should return [["O"]]', () => {
      const givenBoard = [['O']];

      solve(givenBoard);

      expect(givenBoard).toEqual([['O']]);
    });
  });

  describe('given input board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]', () => {
    it('should return [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]', () => {
      const givenBoard = [
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X'],
      ];

      solve(givenBoard);

      expect(givenBoard).toEqual([
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
      ]);
    });
  });

  describe('given input board = [["O","O","O"],["O","O","O"],["O","O","O"]]', () => {
    it('should return [["O","O","O"],["O","O","O"],["O","O","O"]]', () => {
      const givenBoard = [
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
      ];
      solve(givenBoard);

      expect(givenBoard).toEqual([
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
      ]);
    });
  });
});
