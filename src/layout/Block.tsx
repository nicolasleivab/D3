import styled from "styled-components";
import type { TSize } from "../styles/types";

interface TBlock extends React.ComponentPropsWithoutRef<"div"> {
  flexSize?: TSize;
  margin?: TSize;
  padding?: TSize;
}

const Block = styled.div<TBlock>`
  width: 100%,
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
`;

export default Block;
