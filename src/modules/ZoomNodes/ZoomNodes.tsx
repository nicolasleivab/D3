import { useRef, useState, Fragment } from "react";
import { Card, Svg, Flex } from "../../layout";
import { Button, Text } from "../../atoms";
import { datasets } from "./constants";
import Dataframe from "../components/Dataframe";
import NodesContainer from "../components/NodesContainer";
import EventsNodesContainer from "../components/EventsNodesContainer";
import TooltipContainer from "../components/TooltipContainer";
import useDataset from "../hooks/useDataset";
import type { TNode } from "../../data/types";
import type { TSubNode } from "../../data/types";
import useZoomBehaviour from "../hooks/useZoomBehaviour";

export default function ZoomNodes() {
  const svgRef = useRef<any>(null);
  const wrapperRef = useRef<any>(null);
  const buttonRef = useRef<any>(null);

  const [hoveredNode, setHoveredNode] = useState<TNode | null>(null);
  const [activeNode, setActiveNode] = useState<TNode | null>(null);
  const [activeSubNode, setActiveSubNode] = useState<TSubNode | null>(null);

  const onZoomReset = () => {
    setActiveSubNode(null);
    setActiveNode(null);
  };

  const { currentZoomState } = useZoomBehaviour({
    svgRef,
    buttonRef,
    activeNode,
    onZoomReset,
  });

  const { nodes, onButtonClick, activeDataset } = useDataset({ datasets });

  return (
    <Fragment>
      <Dataframe
        datasets={datasets}
        activeDataSet={activeDataset}
        title={"Nodes Datasets:"}
        onClick={(id) => {
          onButtonClick(id);
          setActiveSubNode(null);
          setActiveNode(null);
        }}
      />
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
            nodes={nodes}
            currentZoomState={currentZoomState!}
          />
          <TooltipContainer
            hoveredNode={hoveredNode}
            currentZoomState={currentZoomState!}
            wrapperRef={wrapperRef}
          />
          {!activeNode ? (
            <EventsNodesContainer
              nodes={nodes}
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
