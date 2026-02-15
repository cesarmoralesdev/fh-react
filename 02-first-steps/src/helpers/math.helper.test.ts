import { expect, test } from "vitest";
import { add } from "./math.helper";

test('should add two positives numbers', () => {
    const result = add(1, 3);
    expect(result).toBe(4);
})
