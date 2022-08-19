import type { TNode } from "../../data/types";
import { CircleEvents } from "../../atoms";
import type { ZoomTransform } from "d3-zoom";

type TNodesContainer = {
  currentZoomState: ZoomTransform;
  nodes: TNode[];
  setHoveredNode: (arg0: TNode | null) => void;
  setActiveNode: (arg0: TNode | null) => void;
};

const EventsNodesContainer = ({
  currentZoomState,
  nodes,
  setHoveredNode,
  setActiveNode,
}: TNodesContainer) => {
  return (
    <g transform={currentZoomState?.toString()}>
      {nodes.map(({ id, x, y, radius, color, info, subNodes }: TNode) => {
        return (
          <CircleEvents
            key={id}
            x={x}
            y={y}
            radius={radius}
            onMouseEnter={() =>
              setHoveredNode({ id, x, y, radius, color, info, subNodes })
            }
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => {
              setHoveredNode(null);
              setActiveNode({ id, x, y, radius, color, info, subNodes });
            }}
          />
        );
      })}
    </g>
  );
};

export default EventsNodesContainer;
