import { cleanup, render, screen } from "@testing-library/react";
import { CommonCard, Back, Front } from "../components/CommonCard";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Render CommonCard with open true", () => {
  render(<CommonCard open={true} />);
  expect(screen.getByTestId("common-card")).toBeInTheDocument();
  expect(screen.getByTestId("inner")).toBeInTheDocument();
  expect(screen.getByTestId("inner")).toHaveClass("open");
});

it("Render CommonCard with open false", () => {
  render(<CommonCard open={false} />);
  expect(screen.getByTestId("common-card")).toBeInTheDocument();
  expect(screen.getByTestId("inner")).toBeInTheDocument();
  expect(screen.getByTestId("inner")).not.toHaveClass("open");
});

it("Render component with customClassName props", () => {
  render(<CommonCard open={false} customClassName="class" />);
  expect(screen.getByTestId("common-card")).toHaveClass("class");
});

it("Render Front face", () => {
  render(<Front />);
  expect(screen.getByTestId("common-card-front")).toBeInTheDocument();
});

it("Render Back face", () => {
  render(<Back />);
  expect(screen.getByTestId("common-card-back")).toBeInTheDocument();
});

it("Render component with customStyle props", () => {
  render(
    <CommonCard
      open={false}
      customStyle={{ background: "rgba(0, 128, 0, 0.3)" }}
    />
  );
  expect(screen.getByTestId("common-card")).toHaveStyle({
    background: "rgba(0, 128, 0, 0.3)",
  });
});

it("renders correctly 1", () => {
  const tree = renderer.create(<CommonCard open={false} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="common-card "
  data-testid="common-card"
>
  <div
    className="inner "
    data-testid="inner"
  >
    <div
      className="common-card-front"
      data-testid="common-card-front"
    />
    <div
      className="common-card-back"
      data-testid="common-card-back"
    />
  </div>
</div>
`);
  expect(tree).toMatchSnapshot();
});

it("renders correctly 2", () => {
  const tree = renderer.create(<CommonCard open={true} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="common-card "
  data-testid="common-card"
>
  <div
    className="inner open"
    data-testid="inner"
  >
    <div
      className="common-card-front"
      data-testid="common-card-front"
    />
    <div
      className="common-card-back"
      data-testid="common-card-back"
    />
  </div>
</div>
`);
  expect(tree).toMatchSnapshot();
});

