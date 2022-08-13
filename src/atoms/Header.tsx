import styled from "styled-components";
import type { TSize } from "../styles/types";

interface THeader extends React.ComponentPropsWithoutRef<"header"> {
  margin?: TSize;
}

const StyledHeader = styled.header<THeader>`
  margin: ${({
    theme: {
      spacing: { margin: themeMargin },
    },
    margin,
  }) => themeMargin[margin || "s"]};
`;

const Title = styled.h1`
  font-size: ${({
    theme: {
      typography: { fontSize },
    },
  }) => fontSize.l};
`;

export default function Header({ margin, children }: THeader) {
  return (
    <StyledHeader margin={margin}>
      <Title>{children}</Title>
    </StyledHeader>
  );
}
