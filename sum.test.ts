
import { sum } from "./sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1+0 to equal 1', () => {
  expect(sum(1, 0)).toBe(1)
})