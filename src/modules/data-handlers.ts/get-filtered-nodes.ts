import { TNode } from "../../data/generate-nodes";

const RATIO = 3;

export const getFilteredNodes = (
  nodes: TNode[],
  activeNode: TNode | null,
  wrapperRef?: any,
  currentZoomState?: any,
): TNode[] => {
  let filteredNode = nodes.find((node) => node.id === activeNode?.id)!;

  const dimensions = wrapperRef && wrapperRef.current && wrapperRef.current.getBoundingClientRect();

const zoomFactor = currentZoomState ? currentZoomState.k : 1;
const deltaX = currentZoomState ? currentZoomState.x : 0;
const deltaY = currentZoomState ? currentZoomState.y : 0;

  filteredNode = {
    ...filteredNode,
    radius: dimensions?.width/RATIO/zoomFactor ,
    x: -deltaX/zoomFactor + dimensions?.width/RATIO/zoomFactor ,
    y: -deltaY/zoomFactor + dimensions?.width/RATIO/zoomFactor ,
  };

  return activeNode ? [filteredNode] : nodes;
};
