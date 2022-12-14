import getSurroundingIndexes from "./getSurroundingIndexes";

it("index = 1 through 6", () => {
  expect(getSurroundingIndexes(1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(getSurroundingIndexes(2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(getSurroundingIndexes(3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(getSurroundingIndexes(4)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(getSurroundingIndexes(5)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(getSurroundingIndexes(6)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
it("index =7||8", () => {
  expect(getSurroundingIndexes(7)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  expect(getSurroundingIndexes(8)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});
it("index =31||32", () => {
  expect(getSurroundingIndexes(31)).toEqual([
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  ]);
  expect(getSurroundingIndexes(32)).toEqual([
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ]);
});
it("index = 33 through 37", () => {
  expect(getSurroundingIndexes(33)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
  expect(getSurroundingIndexes(33)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
  expect(getSurroundingIndexes(34)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
  expect(getSurroundingIndexes(35)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
  expect(getSurroundingIndexes(36)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
  expect(getSurroundingIndexes(37)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
});
