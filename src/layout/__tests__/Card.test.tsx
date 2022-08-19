import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { theme } from "../../styles/theme";
import { Card } from "..";
import { ThemeProvider } from "styled-components";

describe("card", () => {
  it("returns a div container with theme style", () => {
    render(
      <ThemeProvider theme={theme}>
        <Card data-testid="card" />
      </ThemeProvider>
    );

    const currentCard = screen.getByTestId("card");

    const {
      card: { boxShadow },
    } = theme;

    expect(currentCard).toBeInTheDocument();
    expect(currentCard).toHaveStyleRule("box-shadow", boxShadow);
  });
});
