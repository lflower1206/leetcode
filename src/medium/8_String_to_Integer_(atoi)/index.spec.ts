import myAtoi from './index';

describe('8. String to Integer (atoi)', () => {
  describe('given input "+42"', () => {
    it('should return 42', () => {
      expect(myAtoi('+42')).toBe(42);
    });
  });

  describe('given input "42"', () => {
    it('should return 42', () => {
      expect(myAtoi('42')).toBe(42);
    });
  });

  describe('given input "   -42"', () => {
    it('should return -42', () => {
      expect(myAtoi('   -42')).toBe(-42);
    });
  });

  describe('given input "4193 with words"', () => {
    it('should return 4193', () => {
      expect(myAtoi('4193 with words')).toBe(4193);
    });
  });

  describe('given input "words and 987"', () => {
    it('should return 0', () => {
      expect(myAtoi('words and 987')).toBe(0);
    });
  });

  describe('given input "2147483649"', () => {
    it('should return 0', () => {
      expect(myAtoi('2147483649')).toBe(2147483647);
    });
  });

  describe('given input "-2147483650"', () => {
    it('should return 0', () => {
      expect(myAtoi('-2147483650')).toBe(-2147483648);
    });
  });
});
