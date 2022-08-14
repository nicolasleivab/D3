import styled from "styled-components";

interface TCard extends React.ComponentPropsWithRef<"div"> {}

const Card = styled.div<TCard>`
  box-shadow: ${({
    theme: {
      card: { boxShadow },
    },
  }) => boxShadow};
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
