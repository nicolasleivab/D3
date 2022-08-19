import { useMemo } from "react";
import type { TNode, TSubNode } from "../../data/types";
import { getFilteredNodes } from "../data-handlers.ts/get-filtered-nodes";
import { Circle } from "../../atoms";
import SubNodesContainer from "./SubNodesContainer";
import type { ZoomTransform } from "d3-zoom";

type TNodesContainer = {
  activeNode: TNode | null;
  activeSubNode: TSubNode | null;
  setActiveSubNode: (arg0: TSubNode | null) => void;
  currentZoomState: ZoomTransform;
  nodes: TNode[];
  wrapperRef: any;
};

const NodesContainer = ({
  activeNode,
  activeSubNode,
  setActiveSubNode,
  currentZoomState,
  nodes,
  wrapperRef,
}: TNodesContainer) => {
  const filteredNodes = useMemo(
    () =>
      getFilteredNodes(
        nodes,
        activeNode,
        activeSubNode,
        wrapperRef,
        currentZoomState
      ),
    [nodes, activeNode, activeSubNode, wrapperRef, currentZoomState]
  );

  return (
    <g transform={currentZoomState?.toString()}>
      {filteredNodes.map(({ id, x, y, color, radius }: TNode) => {
        return <Circle key={id} x={x} y={y} radius={radius} color={color} />;
      })}
      {activeNode ? (
        <SubNodesContainer
          subNodes={filteredNodes[0].subNodes}
          activeSubNode={activeSubNode}
          setActiveSubNode={setActiveSubNode}
          wrapperRef={wrapperRef}
          currentZoomState={currentZoomState}
        />
      ) : null}
    </g>
  );
};

export default NodesContainer;
