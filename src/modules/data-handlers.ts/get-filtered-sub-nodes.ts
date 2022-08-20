import { TSubNode } from "../../data/types";
import type { ZoomTransform } from "d3-zoom";
import { RefObject } from "react";

const RATIO = 2;
const MARGIN_RATIO = 5;

export const getFilteredSubNodes = (
  nodes: TSubNode[],
  activeNode: TSubNode | null,
  wrapperRef?: RefObject<HTMLDivElement>,
  currentZoomState?: ZoomTransform
): TSubNode[] => {
  let filteredNode = nodes.find((node) => node.id === activeNode?.id)!;

  const dimensions = wrapperRef?.current?.getBoundingClientRect();

  const zoomFactor = currentZoomState ? currentZoomState.k : 1;
  const deltaX = currentZoomState ? currentZoomState.x : 0;
  const deltaY = currentZoomState ? currentZoomState.y : 0;

  const widthZoomRatio = dimensions!.width / RATIO / zoomFactor;

  filteredNode = {
    ...filteredNode,
    width: widthZoomRatio,
    x: -deltaX / zoomFactor + dimensions!.width / MARGIN_RATIO / zoomFactor,
    y:
      -deltaY / zoomFactor +
      dimensions!.width / (MARGIN_RATIO * 3) / zoomFactor,
  };

  return activeNode ? [filteredNode] : nodes;
};
