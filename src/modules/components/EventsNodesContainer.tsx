import type { TNode } from '../../data/generate-nodes';
import { CircleEvents } from '../../atoms';

type TNodesContainer = {
  currentZoomState: any;
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
    <g transform={currentZoomState}>
      {nodes.map(({ id, x, y, radius, color, info }: TNode) => {
        return (
          <CircleEvents
            key={id}
            x={x}
            y={y}
            radius={radius}
            onMouseEnter={() =>
              setHoveredNode({ id, x, y, radius, color, info })
            }
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => {
              setHoveredNode(null);
              setActiveNode({ id, x, y, radius, color, info });
            }}
          />
        );
      })}
    </g>
  );
};

export default EventsNodesContainer;
