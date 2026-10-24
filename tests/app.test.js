const { add, multiply, subtract } = require('../app');

test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

test('multiplies two numbers', () => {
    expect(multiply(4, 5)).toBe(20);
});

test('subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
});
