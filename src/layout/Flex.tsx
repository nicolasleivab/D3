import styled from "styled-components";

interface TFlex extends React.ComponentPropsWithoutRef<"div"> {
  fullHeight?: boolean;
  flexDirection?: "row" | "column";
  justifyContent?:
    | "center"
    | "start"
    | "space-between"
    | "space-evenly"
    | "space-around"
    | "flex-end"
    | "flex-start";
  alignItems?: "center" | "baseline" | "flex-end" | "flex-start";
}

const Flex = styled.div<TFlex>`
  display: flex;
  height: ${({ fullHeight }) => (fullHeight ? "100vh" : "auto")};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: wrap;
`;

export default Flex;
