import multiply from './index';

describe('43. Multiply Strings', () => {
  describe('given input num1 = "2", num2 = "3"', () => {
    it('should return "6"', () => {
      expect(multiply('2', '3')).toEqual('6');
    });
  });

  describe('given input num1 = "3", num2 = "5"', () => {
    it('should return "15"', () => {
      expect(multiply('3', '5')).toEqual('15');
    });
  });

  describe('given input num1 = "12", num2 = "12"', () => {
    it('should return "144"', () => {
      expect(multiply('12', '12')).toEqual('144');
    });
  });

  describe('given input num1 = "123", num2 = "456"', () => {
    it('should return "56088"', () => {
      expect(multiply('123', '456')).toEqual('56088');
    });
  });
});
