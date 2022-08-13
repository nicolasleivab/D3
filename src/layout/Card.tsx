import styled from "styled-components";

interface TCard extends React.ComponentPropsWithoutRef<"div"> {}

const Card = styled.div<TCard>`
  box-shadow: ${({
    theme: {
      card: { boxShadow },
    },
  }) => boxShadow};
  margin: ${({
    theme: {
      spacing: { margin: themeMargin },
    },
  }) => themeMargin.s};
  padding: ${({
    theme: {
      spacing: { padding: themePadding },
    },
  }) => themePadding.l};
  width: ${({
    theme: {
      card: { width },
    },
  }) => width};
`;

export default Card;
