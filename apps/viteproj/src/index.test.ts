import { test, expect } from "vitest";

test("3+3 vitest", () => {
  expect(3 + 3).toBe(6);
});

test.each([
  [1, 1],
  [2, 2],
  [10, 10],
])("%i %i vitest ", (a, b) => {
  expect(a / b).toBe(1);
});
