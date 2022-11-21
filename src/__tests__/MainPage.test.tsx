import { render, screen } from "@testing-library/react";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MemoryCard from "../components/MemoryCard";
import MainPage from "../pages/MainPage";
import { getRandomCards } from "../utils/getRandomCards";

enzyme.configure({ adapter: new Adapter() });

it("Render MainPage", () => {
  render(<MainPage />);
  expect(getRandomCards().length).toBeGreaterThan(0);
  expect(getRandomCards().length % 2).toEqual(0);
  expect(screen.queryAllByTestId("memoryCard").length).toEqual(
    getRandomCards().length
  );
});

it("Render MemoryCard list", () => {
  const wrapper = enzyme.shallow(<MainPage />);
  const gameBoard = getRandomCards();
  expect(wrapper.find(MemoryCard)).toHaveLength(gameBoard.length);
  const sampleCard = wrapper.find(MemoryCard).at(0);
  expect(sampleCard.prop("card").status === "close").toBeTruthy();
});
