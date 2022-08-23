import { useRef, useState, Fragment, RefObject, useEffect } from "react";
import { Card, Svg, Flex } from "../../layout";
import { Button, Text } from "../../atoms";
import NodesContainer from "../components/NodesContainer";
import EventsNodesContainer from "../components/EventsNodesContainer";
import TooltipContainer from "../components/TooltipContainer";
import type { TNode, TSubNode } from "../../data/types";
import useZoomBehaviour from "../hooks/useZoomBehaviour";

export default function ZoomNodes({
  nodes,
}: any) {
  const svgRef = useRef(null) as RefObject<SVGSVGElement>;
  const wrapperRef = useRef(null) as RefObject<HTMLDivElement>;
  const buttonRef = useRef(null) as RefObject<HTMLButtonElement>;

  const [activeNode, setActiveNode] = useState<TNode | null>(null);
  const [activeSubNode, setActiveSubNode] = useState<TSubNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<TNode | null>(null);
  const [activeNodes, setActiveNodes] = useState<TNode[]>([]);

  const onZoomReset = () => {
    setActiveSubNode(null);
    setActiveNode(null);
  };

  useEffect(() => {
    onZoomReset();
    setActiveNodes([...nodes])
  }, [nodes]);

  const { currentZoomState } = useZoomBehaviour({
    svgRef,
    buttonRef,
    activeNode,
    onZoomReset,
  });


  return (
    <Fragment>
      <Card ref={wrapperRef}>
        <Flex justifyContent="space-between">
          <Text size="s">
            {Boolean(activeNode)
              ? `Zoom disabled. Click${
                  Boolean(activeSubNode) ? "" : " sub nodes or"
                } Zoom to Extent.`
              : "Activate scroll zoom with ctrl + scroll"}
          </Text>
          <Button ref={buttonRef}>Zoom to Extent</Button>
        </Flex>

        <Svg ref={svgRef}>
          <NodesContainer
            wrapperRef={wrapperRef}
            activeNode={activeNode}
            activeSubNode={activeSubNode}
            setActiveSubNode={setActiveSubNode}
            nodes={activeNodes}
            currentZoomState={currentZoomState!}
          />
          <TooltipContainer
            hoveredNode={hoveredNode}
            currentZoomState={currentZoomState!}
            wrapperRef={wrapperRef}
          />
          {!activeNode ? (
            <EventsNodesContainer
              nodes={activeNodes}
              currentZoomState={currentZoomState!}
              setHoveredNode={setHoveredNode}
              setActiveNode={setActiveNode}
            />
          ) : null}
        </Svg>
      </Card>
    </Fragment>
  );
}
