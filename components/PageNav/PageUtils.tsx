const MEMES_PER_PAGE = 27;
const LAST_PAGE = 37;
const FIST_PAGE = 1;

export function isInvalidPage(pageIndex: string | null): boolean {
  const pageOutOfRange = (index: number): boolean =>
    index < FIST_PAGE || index > LAST_PAGE;
  return (
    pageIndex === null ||
    Number.isNaN(parseInt(pageIndex)) ||
    pageOutOfRange(parseInt(pageIndex))
  );
}

export function getNavIndexes(index: number): number[] {
  if (index <= 6) return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

interface MemeEndPoints {
  start: number;
  end: number;
}

export function getMemeEndPoints(pageNum: number): MemeEndPoints {
  const end = pageNum * MEMES_PER_PAGE;
  const start = end - MEMES_PER_PAGE;
  return { start, end };
}
