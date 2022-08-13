import { Tooltip } from '../../atoms';
import { TCircle } from '../../data/generate-circles';

const TooltipContainer = ({
  hoveredCircle,
}: {
  hoveredCircle: TCircle | null;
}) => {
  return (
    <g>
      {hoveredCircle ? (
        <Tooltip
          x={hoveredCircle.x}
          y={hoveredCircle.y}
          info={hoveredCircle.info}
        />
      ) : null}
    </g>
  );
};

export default TooltipContainer;
