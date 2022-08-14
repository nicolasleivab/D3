import { Fragment } from "react";
import Text from "./Text";
import styled from "styled-components";

interface TTooltip extends React.ComponentPropsWithoutRef<"rect"> {
  info?: string;
}

const StyledRect = styled.rect<TTooltip>`
  fill: ${({
    theme: {
      tooltip: { fill },
    },
  }) => fill};
  stroke: ${({
    theme: {
      tooltip: { stroke },
    },
  }) => stroke};
  rx: ${({
    theme: {
      tooltip: { radius },
    },
  }) => radius};
  width: ${({
    theme: {
      tooltip: { width },
    },
  }) => width};
  height: ${({
    theme: {
      tooltip: { height },
    },
  }) => height};
`;

const ForeignObject = styled.foreignObject`
  x: ${({
    theme: {
      tooltip: { margin },
    },
    x,
  }) => x + margin};
  y: ${({
    theme: {
      tooltip: { margin },
    },
    y,
  }) => y + margin};
  width: ${({
    theme: {
      tooltip: { innerWidth },
    },
  }) => innerWidth};
  height: ${({
    theme: {
      tooltip: { height },
    },
  }) => height};
`;

const Tooltip = ({ x, y, info }: TTooltip) => {
  return (
    <Fragment>
      <StyledRect x={x} y={y} />
      <ForeignObject x={x} y={y}>
        <Text size={"s"}>{info}</Text>
      </ForeignObject>
    </Fragment>
  );
};

export default Tooltip;
