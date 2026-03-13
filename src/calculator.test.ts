import { add, division, multiply, subtract } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 6;
  const b: number = 3;
  const expected: number = 9;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 1;
  const expected: number = 5;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply two with four is eight", () => {
  // Arrange
  const a: number = 2;
  const b: number = 4;
  const expected: number = 8;

  // Act
  const actual: number = multiply(a, b) ;

  // Assert
  expect(actual).toBe(expected);
});

test("multiply two with four is eight", () => {
  // Arrange
  const a: number = 2;
  const b: number = 4;
  const expected: number = 8;

  // Act
  const actual: number = multiply(a, b) ;

  // Assert
  expect(actual).toBe(expected);
});

test("divide 9 by three is three", () => {
  // Arrange
  const a: number = 9;
  const b: number = 3;
  const expected: number = 3;

  // Act
  const actual: number = division(a, b) ;

  // Assert
  expect(actual).toBe(expected);
});