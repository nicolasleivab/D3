import { Tooltip } from "../../atoms";
import { TNode } from "../../data/types";
import type { ZoomTransform } from "d3-zoom";
import { RefObject } from "react";

const MAX_SIZE = 250;

const getTooltipCoor = (coor: number, dimension: number) => {
  if (coor + MAX_SIZE > dimension) {
    return dimension - MAX_SIZE;
  }
  return coor;
};

const TooltipContainer = ({
  hoveredNode,
  currentZoomState,
  wrapperRef,
}: {
  hoveredNode: TNode | null;
  currentZoomState: ZoomTransform;
  wrapperRef: RefObject<HTMLDivElement>;
}) => {
  const dimensions = wrapperRef?.current?.getBoundingClientRect();

  const zoomFactor = currentZoomState ? currentZoomState.k : 1;
  const deltaX = currentZoomState ? currentZoomState.x : 0;
  const deltaY = currentZoomState ? currentZoomState.y : 0;

  return (
    <g>
      {hoveredNode ? (
        <Tooltip
          x={getTooltipCoor(
            zoomFactor * hoveredNode.x + deltaX,
            dimensions!.width
          )}
          y={getTooltipCoor(
            zoomFactor * hoveredNode.y + deltaY,
            dimensions!.height
          )}
          info={hoveredNode.info}
        />
      ) : null}
    </g>
  );
};

export default TooltipContainer;
