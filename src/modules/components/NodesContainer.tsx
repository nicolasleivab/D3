import { useMemo } from 'react';
import type { TNode } from '../../data/generate-nodes';
import { getFilteredNodes } from '../data-handlers.ts/get-filtered-nodes';
import { Circle } from '../../atoms';

type TNodesContainer = {
  activeNode: TNode | null;
  currentZoomState: any;
  nodes: TNode[];
};

const NodesContainer = ({
  activeNode,
  currentZoomState,
  nodes,
}: TNodesContainer) => {
  const filteredNodes = useMemo(
    () => getFilteredNodes(nodes, activeNode),
    [nodes, activeNode]
  );

  return (
    <g transform={currentZoomState}>
      {filteredNodes.map(({ id, x, y, color, radius }: TNode) => {
        return <Circle key={id} x={x} y={y} radius={radius} color={color} />;
      })}
    </g>
  );
};

export default NodesContainer;
