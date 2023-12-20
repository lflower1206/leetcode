import { reverseByCalculation, reverseBySwap } from './index';

describe('7. Reverse Integer', () => {
  [reverseByCalculation, reverseBySwap].forEach((reverse) => {
    describe(`reverse by ${reverse.name}`, () => {
      describe('given input 123', () => {
        it('should return 321', () => {
          expect(reverse(123)).toBe(321);
        });
      });

      describe('given input -123', () => {
        it('should return -321', () => {
          expect(reverse(-123)).toBe(-321);
        });
      });

      describe('given input 120', () => {
        it('should return 21', () => {
          expect(reverse(120)).toBe(21);
        });
      });

      describe('given input 0', () => {
        it('should return 0', () => {
          expect(reverse(0)).toBe(0);
        });
      });
    });
  });
});
