import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import MemoryCard from "../components/MemoryCard";
import { GameCard } from "../interfaces/GameCard";
import renderer from "react-test-renderer";

afterEach(cleanup);

const card: GameCard = {
  image:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a6bf3c3-ed4e-4d52-85b6-2692a3b8eeac/dcruy46-ff29bbcc-2fe8-4f6e-b72a-2023a490cd22.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhNmJmM2MzLWVkNGUtNGQ1Mi04NWI2LTI2OTJhM2I4ZWVhY1wvZGNydXk0Ni1mZjI5YmJjYy0yZmU4LTRmNmUtYjcyYS0yMDIzYTQ5MGNkMjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I2dGebKY-yxOVbv4LwcOU5ePeeYICmcuzQvu3fPGazo",
  id: "1-0",
  status: "close",
  cardName: "1",
};

const onClick = jest.fn();

it("Render MemoryCard with sample card", () => {
  render(<MemoryCard card={card} onClick={onClick} />);
  expect(screen.getByTestId("common-card")).toBeInTheDocument();
  expect(screen.getByTestId("inner")).not.toHaveClass("open");
  expect(screen.getByTestId("front")).toBeInTheDocument();
  expect(screen.getByTestId("back")).toBeInTheDocument();
  expect(screen.getByTestId("back")).toHaveStyle(
    `backgroundImage: ${card.image}`
  );
  fireEvent.click(screen.getByTestId("memoryCard"));
  expect(onClick).toHaveBeenCalledTimes(1);
});

it("Rerender MemoryCard", () => {
  const { rerender } = render(
    <MemoryCard card={card} onClick={onClick} />
  );
  expect(screen.getByTestId("inner")).not.toHaveClass("open");
  rerender(
    <MemoryCard card={{ ...card, status: "open" }} onClick={onClick} />
  );
  expect(screen.getByTestId("inner")).toHaveClass("open");
  rerender(
    <MemoryCard card={{ ...card, status: "done" }} onClick={onClick} />
  );
  expect(screen.getByTestId("inner")).toHaveClass("open");
  rerender(
    <MemoryCard card={{ ...card, status: "close" }} onClick={onClick} />
  );
  expect(screen.getByTestId("inner")).not.toHaveClass("open");
});

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryCard
      card={{ ...card, status: "close" }}
        onClick={onClick}
      />
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<span
  data-testid="memoryCard"
  onClick={[Function]}
>
  <div
    className="common-card memory-card"
    data-testid="common-card"
  >
    <div
      className="inner "
      data-testid="inner"
    >
      <div
        className="common-card-front"
        data-testid="common-card-front"
      >
        <div
          className="front"
          data-testid="front"
        />
      </div>
      <div
        className="common-card-back"
        data-testid="common-card-back"
      >
        <div
          className="back"
          data-testid="back"
          style={
            Object {
              "backgroundImage": "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a6bf3c3-ed4e-4d52-85b6-2692a3b8eeac/dcruy46-ff29bbcc-2fe8-4f6e-b72a-2023a490cd22.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhNmJmM2MzLWVkNGUtNGQ1Mi04NWI2LTI2OTJhM2I4ZWVhY1wvZGNydXk0Ni1mZjI5YmJjYy0yZmU4LTRmNmUtYjcyYS0yMDIzYTQ5MGNkMjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I2dGebKY-yxOVbv4LwcOU5ePeeYICmcuzQvu3fPGazo)",
            }
          }
        />
      </div>
    </div>
  </div>
</span>
`);
  expect(tree).toMatchSnapshot();
});
