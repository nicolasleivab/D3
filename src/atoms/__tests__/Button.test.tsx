import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "jest-styled-components";
import { theme } from "../../styles/theme";
import { Button } from "..";

describe("button", () => {
  it("returns a button with theme background color", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    );
    const highlightedButton = screen.getByRole("button");

    const {
      colors: { background },
    } = theme;

    expect(highlightedButton).toHaveStyleRule("background-color", background);
  });
  it("returns a button with background color highlight if secondary is passed as buttonType value", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button buttonType="secondary" />
      </ThemeProvider>
    );
    const highlightedButton = screen.getByRole("button");

    const {
      colors: { highlight },
    } = theme;

    expect(highlightedButton).toHaveStyleRule("background-color", highlight);
  });
  it("returns a disbled button if disabled is passed", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button disabled />
      </ThemeProvider>
    );
    const disabledButton = screen.getByRole("button");

    expect(disabledButton).toBeDisabled();
  });
});
