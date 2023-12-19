import convert from './index';

describe('6. Zigzag Conversion', () => {
  describe('given input A and numOfRow 1', () => {
    it('should return A', () => {
      const givenInput = 'A';

      expect(convert(givenInput, 1)).toEqual('A');
    });
  });

  describe('given input AB and numOfRow 1', () => {
    it('should return A', () => {
      const givenInput = 'AB';

      expect(convert(givenInput, 1)).toEqual('AB');
    });
  });

  describe('given input PAYPALISHIRING', () => {
    const givenInput = 'PAYPALISHIRING';

    describe('given numOfRow 3', () => {
      it('should return PAHNAPLSIIGYIR', () => {
        expect(convert(givenInput, 3)).toEqual('PAHNAPLSIIGYIR');
      });
    });

    describe('given numOfRow 4', () => {
      it('should return PAHNAPLSIIGYIR', () => {
        const givenInput = 'PAYPALISHIRING';

        expect(convert(givenInput, 4)).toEqual('PINALSIGYAHRPI');
      });
    });
  });
});
