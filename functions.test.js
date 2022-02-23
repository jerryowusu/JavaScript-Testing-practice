const modules = require("./functions");

describe('String Tests', () => {

    test('Get String Length',
      () => expect(modules.stringLength('hello')).toBe(5));

    test('Throw error for an empty string', () => {
      expect(() => modules.stringLength("")).toThrowError("Please string should not be empty");
    });

    test('Throw error for a string with length more than required', () => {
      expect(() => modules.stringLength("jerryowusuansah")).toThrowError("Please string should not be more than 10 characters");
    });

    test('Reverse a String', () => {
      expect(modules.reverseString("jerry")).toBe("yrrej");
    });

    test('Capitalize first Letter', () => {
      expect(modules.capitalizeFirstLetter('jerry')).toBe('Jerry');
    });
});


describe('Calculator Tests', () => {
  const calculator = new modules.Calculator();
  const a = 10, b = 20;
  const c = -5, d = 5;
  const e = 2, f = 0;

  describe('Add Two Numbers', () => {
    test('Addition 1', () => expect(calculator.add(a, b)).toBe(30));
    test('Addition 2', () => expect(calculator.add(c, e)).toBe(-3));
  });

  describe('Subtract Two Numbers', () => {
    test('Subtraction 1', () => expect(calculator.subtract(f, d)).toBe(-5));
    test('Subtraction 2', () => expect(calculator.subtract(d, d)).toBe(0));
  });

  describe('Multiply Two Numbers', () => {
    test('Multiplication 1', () => expect(calculator.multiply(a, d)).toBe(50));
    test('Multiplication 2', () => expect(calculator.multiply(b, b)).toBe(400));
  });

  describe('Divide Two Numbers', () => {
    test('Division 1', () => expect(calculator.divide(d, b)).toBe(0.25));
    test('Division 2', () => expect(calculator.divide(a, e)).toBe(5));
  });

});