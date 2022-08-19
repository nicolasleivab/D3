import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "jest-styled-components";
import { theme } from "../../styles/theme";
import { Header } from "..";

describe("header", () => {
  it("returns a header with an h1 title", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header>Header</Header>
      </ThemeProvider>
    );
    const currentHeader = screen.getByRole("banner");
    const currentTitle = screen.getByRole("heading");

    expect(currentHeader).toBeInTheDocument();
    expect(currentTitle).toBeInTheDocument();
    expect(currentHeader).toContainHTML("header");
    expect(currentTitle).toContainHTML("h1");
  });
});
