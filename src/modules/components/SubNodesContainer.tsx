import { useMemo, Fragment } from "react";
import type { TSubNode } from "../../data/types";
import { getFilteredSubNodes } from "../data-handlers.ts/get-filtered-sub-nodes";
import { Rect } from "../../atoms";

type TNodesContainer = {
  subNodes: TSubNode[];
  activeSubNode: TSubNode | null;
  setActiveSubNode: (arg0: TSubNode | null) => void;
  wrapperRef: any;
  currentZoomState: any;
};

const SubNodesContainer = ({
  subNodes,
  activeSubNode,
  setActiveSubNode,
  wrapperRef,
  currentZoomState,
}: TNodesContainer) => {
  const filteredSubNodes = useMemo(
    () =>
      getFilteredSubNodes(
        subNodes,
        activeSubNode,
        wrapperRef,
        currentZoomState
      ),
    [subNodes, activeSubNode, wrapperRef, currentZoomState]
  );

  return (
    <Fragment>
      {filteredSubNodes.map(({ id, x, y, color, width }: TSubNode) => {
        return (
          <Rect
            key={id}
            id={id}
            x={x}
            y={y}
            width={width}
            color={color}
            onClick={() => setActiveSubNode({ id, x, y, color, width })}
          />
        );
      })}
    </Fragment>
  );
};

export default SubNodesContainer;
