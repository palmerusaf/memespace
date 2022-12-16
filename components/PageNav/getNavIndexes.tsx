export default function getIndex(index: number): number[] {
  if (index <= 6) return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const LAST_PAGE = 37;
  if (index >= LAST_PAGE - 4 && index <= LAST_PAGE)
    return [28, 29, 30, 31, 32, 33, 34, 35, 36, 37];

  const start = index - 5;
  const end = start + 10;
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}
