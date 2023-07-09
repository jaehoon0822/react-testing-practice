import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("초기 form", () => {
  render(<SummaryForm setOrderPhase={undefined} />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  expect(checkbox).not.toBeChecked();

  const orderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  expect(orderButton).toBeDisabled();
});

test("checkbox 첫 클릭시 button disabled, 그다음 클릭시 enabled", async () => {
  render(<SummaryForm setOrderPhase={undefined} />);
  const user = userEvent.setup();

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  const orderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  // 초기 체크박스 상태 확인: not checked
  expect(checkbox).not.toBeChecked();
  // 초기 버튼 상태 확인: disabled
  expect(orderButton).toBeDisabled();

  // -------------------------------
  // checkbox state: checked
  await user.click(checkbox);
  // 상태 확인: checked
  expect(checkbox).toBeChecked();
  // button 상태 확인: enabled
  expect(orderButton).toBeEnabled();

  // -------------------------------
  // checkbox state: not checked
  await user.click(checkbox);
  // 상태 확인: not checked
  expect(checkbox).not.toBeChecked();
  // button 상태 확인: disabled
  expect(orderButton).toBeDisabled();
});

test("popover respond to hover", async () => {
  render(<SummaryForm setOrderPhase={null} />);
  const user = userEvent.setup();

  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );

  expect(nullPopover).not.toBeInTheDocument();

  // popover mouseover
  const termsAndConditions = screen.getByText(/terms and conditions/i);

  await user.hover(termsAndConditions);

  const popover = screen.queryByText(/terms and conditions/i)

  expect(popover).toBeInTheDocument();

  // popover disappers when we mouse out
  await user.unhover(termsAndConditions)
  expect(popover).not.toBeInTheDocument()

});
