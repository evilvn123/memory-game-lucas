import { getRandomCards } from "../utils/getRandomCards";

it("initGameBoard work", () => {
  const board = getRandomCards();
  expect(board.length % 2).toEqual(0);
});
