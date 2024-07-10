// app.test.js
const { add, subtract } = require('./app');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3); // pass
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3); // pass
});

test('adds 1 + 1 to equal 3', () => {
    expect(add(1, 1)).toBe(3); // fail
});

test('subtracts 5 - 1 to equal 3', () => {
    expect(subtract(5, 1)).toBe(3); // fail
});

test('adds 2 + 2 to equal 4', () => {
    expect(add(2, 2)).toBe(4); // fail
});