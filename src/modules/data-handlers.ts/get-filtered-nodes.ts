import { TNode, TSubNode } from "../../data/types";

const RATIO = 3;

export const getFilteredNodes = (
  nodes: TNode[],
  activeNode: TNode | null,
  activeSubNode: TSubNode | null,
  wrapperRef?: any,
  currentZoomState?: any,
): TNode[] => {
  let filteredNode = nodes.find((node) => node.id === activeNode?.id)!;

  const dimensions = wrapperRef && wrapperRef.current && wrapperRef.current.getBoundingClientRect();

const zoomFactor = currentZoomState ? currentZoomState.k : 1;
const deltaX = currentZoomState ? currentZoomState.x : 0;
const deltaY = currentZoomState ? currentZoomState.y : 0;

const widthZoomRatio = dimensions?.width/RATIO/zoomFactor;
const heightZoomRatio = dimensions?.width/RATIO/zoomFactor;

  filteredNode = {
    ...filteredNode,
    radius: activeSubNode ? dimensions?.height/zoomFactor : widthZoomRatio,
    x: -deltaX/zoomFactor + widthZoomRatio,
    y: -deltaY/zoomFactor + heightZoomRatio,
    subNodes: filteredNode?.subNodes.map((subNode) => {
        return {
            ...subNode,
            width: subNode.width*RATIO/zoomFactor,
            x: -deltaX/zoomFactor + subNode.x/zoomFactor,
            y: -deltaY/zoomFactor + subNode.y/zoomFactor,
        }
    })
  };

  return activeNode ? [filteredNode] : nodes;
};
