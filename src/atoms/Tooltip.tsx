import { Fragment } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import SplitText from "./utils/SplitText";

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

const {
  tooltip: { radius },
} = theme;

const Tooltip = ({ x, y, info }: TTooltip) => {
  return (
    <Fragment>
      <StyledRect x={x} y={y} rx={radius} />
      <SplitText text={info!} x={Number(x)} y={Number(y)} />
    </Fragment>
  );
};

export default Tooltip;
