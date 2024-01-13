import { sum } from "../sum";

test('sum function calculate sum of two numbers', () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
})