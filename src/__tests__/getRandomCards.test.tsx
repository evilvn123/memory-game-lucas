import { getRandomCards } from "../utils/getRandomCards";

it("test function work", () => {
  const board = getRandomCards();
  expect(board.length % 2).toEqual(0);
});
