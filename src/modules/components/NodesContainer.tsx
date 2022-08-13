import type { TCircle } from '../../data/generate-circles';
import { Circle } from '../../atoms';

type TNodesContainer = {
  currentZoomState: any;
  circles: TCircle[];
};

const NodesContainer = ({ currentZoomState, circles }: TNodesContainer) => {
  return (
    <g transform={currentZoomState}>
      {circles.map(({ x, y, color, radius, info }: TCircle) => {
        return <Circle x={x} y={y} radius={radius} color={color} />;
      })}
    </g>
  );
};

export default NodesContainer;
