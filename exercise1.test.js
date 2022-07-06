const { money } = require('./exercise1');

describe('Exercise 1 Test Suite', () => {
  it('should return 6', () => {
    expect(
      money(
        626.5,
        [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
      )
    ).toBe(6);
  });

  it('should return -1', () => {
    expect(money(626.5, [500, 200, 100, 50, 20, 10, 5])).toBe(-1);
  });

  it('should return 2', () => {
    expect(money(600, [500, 100])).toBe(2);
  });
});
