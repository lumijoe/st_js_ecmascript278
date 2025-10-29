// maintest.test.js
const { add } = require('./maintest');

describe('add関数のテスト', () => {
  test('2 + 3 は 5 を返す', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  test('10 + 20 は 30 を返す', () => {
    const result = add(10, 20);
    expect(result).toBe(30);
  });

  test('負の数の計算: -5 + 3 は -2 を返す', () => {
    const result = add(-5, 3);
    expect(result).toBe(-2);
  });
});
