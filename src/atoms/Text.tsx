import styled from "styled-components";
import type { TSize } from "../styles/types";

interface TText extends React.ComponentPropsWithoutRef<"p"> {
  size: TSize;
  margin?: TSize;
}

const Text = styled.p<TText>`
  font-size: ${({
    theme: {
      typography: { fontSize },
    },
    size,
  }) => fontSize[size]};
  margin-bottom: ${({
    theme: {
      spacing: { margin: themeMargin },
    },
    margin,
  }) => themeMargin[margin || "s"]};
`;

export default Text;
