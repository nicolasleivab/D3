import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { theme } from "../../styles/theme";
import { Flex } from "..";
import { ThemeProvider } from "styled-components";

describe("flex", () => {
  it("returns a div with flex display", () => {
    render(
      <ThemeProvider theme={theme}>
        <Flex data-testid="flex" />
      </ThemeProvider>
    );

    const currentFlex = screen.getByTestId("flex");

    expect(currentFlex).toBeInTheDocument();
    expect(currentFlex).toHaveStyleRule("display", "flex");
  });
});
