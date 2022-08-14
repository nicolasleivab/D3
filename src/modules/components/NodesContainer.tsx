import { useMemo } from 'react';
import type { TNode } from '../../data/generate-nodes';
import { getFilteredNodes } from '../data-handlers.ts/get-filtered-nodes';
import { Circle } from '../../atoms';

type TNodesContainer = {
  activeNode: TNode | null;
  currentZoomState: any;
  nodes: TNode[];
  wrapperRef: any;
};

const NodesContainer = ({
  activeNode,
  currentZoomState,
  nodes,
  wrapperRef,
}: TNodesContainer) => {
  const filteredNodes = useMemo(
    () => getFilteredNodes(nodes, activeNode, wrapperRef, currentZoomState),
    [nodes, activeNode, wrapperRef, currentZoomState]
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
