import React from "react";
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
