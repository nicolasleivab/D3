import { Tooltip } from "../../atoms";
import { TNode } from "../../data/generate-nodes";

const TooltipContainer = ({ hoveredNode }: { hoveredNode: TNode | null }) => {
  return (
    <g>
      {hoveredNode ? (
        <Tooltip x={hoveredNode.x} y={hoveredNode.y} info={hoveredNode.info} />
      ) : null}
    </g>
  );
};

export default TooltipContainer;
