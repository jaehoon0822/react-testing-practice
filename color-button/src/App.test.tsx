import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// test("button has correct initial button", () => {
//   render(<App />);
//   const colorButton = screen.getByRole("button", {
//     name: "change to blue",
//   });
//   expect(colorButton).toHaveStyle({ "background-color": "reredd" });
// });
// test("button turns blue when clicked", () => {
//   render(<App />);

//   // get button
//   const colorButton = screen.getByRole("button", { name: "change to blue" });

//   // click button
//   fireEvent.click(colorButton);

//   // expect background color to be blue
//   expect(colorButton).toHaveStyle({ "background-color": "blue" });

//   // expect name to be "change to red"
//   expect(colorButton).toHaveTextContent("change to red");
// });

// test("initial conditions", () => {
//   render(<App />);

//   // check that the button starts out enabled
//   const colorButton = screen.getByRole("button", {
//     name: "change to blue",
//   });

//   expect(colorButton).toBeEnabled();

//   const checkBox = screen.getByRole("checkbox");

//   expect(checkBox).not.toBeChecked();
// });

// test("checkbox 첫번째 클릭시 button disabled, 두번째 클릭시 button enabled", () => {
//   render(<App />);

//   const colorButton = screen.getByRole("button", { name: "change to blue" });

//   const checkbox = screen.getByRole("checkbox", {
//     name: "disable button",
//   });

//   fireEvent.click(checkbox);
//   expect(colorButton).toBeDisabled();

//   fireEvent.click(checkbox);
//   expect(colorButton).toBeEnabled();
// });

// test("checkbox 클릭시 색상 gray 로 변경", () => {
//   render(<App />);

//   const colorButton = screen.getByRole("button", { name: "change to blue" });

//   const checkbox = screen.getByRole("checkbox", { name: "disable button" });

//   fireEvent.click(checkbox);

//   expect(colorButton).toHaveStyle({
//     "background-color": "gray",
//   });
// });

// describe("spaces before camel-case capital letters", () => {
//   test("Works for no inner capital letters", () => {
//     expect(replaceCamelWithSpaces("Red")).toBe("Red");
//   });

//   test("Works for one inner capital letter", () => {
//     expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
//   });

//   test("Works for mulitple inner capital letters", () => {
//     expect(replaceCamelWithSpaces("MidiumVioletRed")).toBe("Midium Violet Red");
//   });
// });

describe("code quiz", () => {
  test("color change to MidnightBlue and change to red", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
      name: "change to MidnightBlue",
    });

    // button click
    fireEvent.click(colorButton);

    // button background color 는 red
    expect(colorButton).toHaveStyle({
      "background-color": "MidnightBlue",
    });

    // button contents 는 change to red
    expect(colorButton).toHaveTextContent("change to red");

    // button click
    fireEvent.click(colorButton);

    // button background color 는 red
    expect(colorButton).toHaveStyle({
      "background-color": "red",
    });

    // button contents 는 change to red
    expect(colorButton).toHaveTextContent("change to MidnightBlue");
  });

  test("checkbox click to disabling button", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
      name: "change to MidnightBlue",
    });

    const checkbox = screen.getByRole("checkbox", {
      name: "disable button",
    });

    // button 활성화 되었는지
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);

    // button disabled
    expect(colorButton).toBeDisabled();
    // button color 는 gray
    expect(colorButton).toHaveStyle({
      "background-color": "gray",
    });
  });
});
