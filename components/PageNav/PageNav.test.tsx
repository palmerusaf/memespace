import getNavIndexes from "./getNavIndexes";

it("index = 1 through 6", () => {
  expect(getNavIndexes(1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(getNavIndexes(2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(getNavIndexes(3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(getNavIndexes(4)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(getNavIndexes(5)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(getNavIndexes(6)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
it("index =7||8", () => {
  expect(getNavIndexes(7)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  expect(getNavIndexes(8)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});
it("index =31||32", () => {
  expect(getNavIndexes(31)).toEqual([
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  ]);
  expect(getNavIndexes(32)).toEqual([
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ]);
});
it("index = 33 through 37", () => {
  expect(getNavIndexes(33)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
  expect(getNavIndexes(33)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
  expect(getNavIndexes(34)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
  expect(getNavIndexes(35)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
  expect(getNavIndexes(36)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
  expect(getNavIndexes(37)).toEqual([
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  ]);
});
