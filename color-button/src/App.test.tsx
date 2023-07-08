import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial button", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "change to blue",
  });
  expect(colorButton).toHaveStyle({ "background-color": "red" });
});
test("button turns blue when clicked", () => {
  render(<App />);

  // get button
  const colorButton = screen.getByRole("button", { name: "change to blue" });

  // click button
  fireEvent.click(colorButton);

  // expect background color to be blue
  expect(colorButton).toHaveStyle({ "background-color": "blue" });

  // expect name to be "change to red"
  expect(colorButton).toHaveTextContent("change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "change to blue",
  });

  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");

  expect(checkBox).not.toBeChecked();
});

test("checkbox 첫번째 클릭시 button disabled, 두번째 클릭시 button enabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "change to blue" });

  const checkbox = screen.getByRole("checkbox", {
    name: "desable-btn",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
