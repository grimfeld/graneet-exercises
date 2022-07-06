const { decToBin, counter } = require('./exercise2');

describe('Exercise 2 Test Suite', () => {
  describe('Decimal to Binary Test Suite', () => {
    it('should return 1111', () => {
      expect(decToBin(15)).toBe('1111');
    });

    it('should return 1010', () => {
      expect(decToBin(10)).toBe('1010');
    });
  });

  describe('Counter Test Suite', () => {
    it('should return 6', () => {
      expect(counter(123456)).toBe(6);
    });

    it('should return 0', () => {
      expect(counter(65535)).toBe(0);
    });

    it('should return 1', () => {
      expect(counter(0)).toBe(1);
    });
  });
});
