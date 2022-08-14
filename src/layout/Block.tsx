import styled from "styled-components";
import type { TSize } from "../styles/types";

interface TBlock extends React.ComponentPropsWithoutRef<"div"> {
  width?: string;
  flexSize?: TSize;
  margin?: TSize;
  padding?: TSize;
}

const Block = styled.div<TBlock>`
  width: ${({ width }) => width || "auto"}};
  flex: ${({
    theme: {
      flex: { size },
    },
    flexSize,
  }) => size[flexSize || "s"]};
  margin: ${({
    theme: {
      spacing: { margin: themeMargin },
    },
    margin,
  }) => themeMargin[margin || "s"]};
  padding: ${({
    theme: {
      spacing: { padding: themePadding },
    },
    padding,
  }) => themePadding[padding || "s"]};
  @media (max-width: 768px) {
    width: 90%;
  };
`;

export default Block;
