import { describe, expect, test } from "vitest";
import { add, divide, multiply, substract } from "./math.helper";

describe('add', () => {
    test('should add two positives numbers', () => {
        // 1.- Arrange
        const a = 1;
        const b = 3;
        // 2.- Act
        const result = add(a, b);
        // 2.- Assert
        expect(result).toBe(a + b);
    })

})
describe('substract', () => {
    test('should substract two positives numbers', () => {
        // 1.- Arrange
        const a = 4;
        const b = 3;
        // 2.- Act
        const result = substract(a, b);
        // 2.- Assert
        expect(result).toBe(a - b);
    })
    test('should substract two negatives numbers', () => {
        // 1.- Arrange
        const a = 1;
        const b = 3;
        // 2.- Act
        const result = substract(a, b);
        // 2.- Assert
        expect(result).toBe(a - b);
    })

})
describe('multiply', () => {
    test('should multiply two positives numbers', () => {
        // 1.- Arrange
        const a = 1;
        const b = 3;
        // 2.- Act
        const result = multiply(a, b);
        // 2.- Assert
        expect(result).toBe(a * b);
    })
})
describe('divide', () => {
    test('should divide two positives numbers', () => {
        // 1.- Arrange
        const a = 12;
        const b = 3;
        // 2.- Act
        const result = divide(a, b);
        // 2.- Assert
        expect(result).toBe(a / b);
    })
})