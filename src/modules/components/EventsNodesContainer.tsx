import type { TCircle } from '../../data/generate-circles';
import { CircleEvents } from '../../atoms';

type TNodesContainer = {
  currentZoomState: any;
  circles: TCircle[];
  setHoveredCircle: (arg0: TCircle | null) => void;
};

const EventsNodesContainer = ({
  currentZoomState,
  circles,
  setHoveredCircle,
}: TNodesContainer) => {
  return (
    <g transform={currentZoomState}>
      {circles.map(({ x, y, radius, color, info }: TCircle) => {
        return (
          <CircleEvents
            x={x}
            y={y}
            radius={radius}
            onMouseEnter={() => setHoveredCircle({ x, y, info, radius, color })}
            onMouseLeave={() => setHoveredCircle(null)}
          />
        );
      })}
    </g>
  );
};

export default EventsNodesContainer;
