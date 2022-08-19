import { useRef, useEffect, Fragment, useState } from "react";
import { Card, Svg } from "../../layout";
import {
  data,
  forceSets,
  TForceItem,
  TLinkDatum,
  TNode,
  TNodeDatum,
} from "./constants/data";
import { Button, Text } from "../../atoms";
import { Flex } from "../../layout";
import { select } from "d3-selection";
import {
  forceSimulation,
  forceLink,
  forceCenter,
  forceManyBody,
  forceCollide,
} from "d3-force";
import { drag } from "d3-drag";
import useZoomBehaviour from "../hooks/useZoomBehaviour";
import { colors } from "./constants/colors";
import Dataframe from "../components/Dataframe";

export default function ForceSimulation() {
  const svgRef = useRef<any>(null);
  const wrapperRef = useRef<any>(null);
  const buttonRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const [currentStrength, setStrength] = useState<TForceItem>(forceSets[0]);

  const { currentZoomState } = useZoomBehaviour({
    svgRef,
    buttonRef,
    activeNode: null,
    onZoomReset: () => null,
  });

  useEffect(() => {
    const g: any = select(containerRef.current);

    g.selectAll("line")
      .data(data.links)
      .enter()
      .append("line")
      .style("stroke", "#999999")
      .style("stroke-opacity", 1);

    g.selectAll("circle")
      .data(data.nodes)
      .enter()
      .append("circle")
      .attr("r", (d: TNode) => d.r)
      .style("stroke", "#000000")
      .style("stroke-width", 1.5)
      .style("fill", (d: TNode) => colors[+d.group]);
  }, []);

  useEffect(() => {
    const { width, height } =
      wrapperRef &&
      wrapperRef.current &&
      wrapperRef.current.getBoundingClientRect();

    const force = forceSimulation(data.nodes)
      .force("charge", forceManyBody().strength(currentStrength.value))
      .force("link", forceLink(data.links))
      .force("center", forceCenter())
      .force(
        "collision",
        forceCollide().radius((d: any) => d.r)
      );

    const g: any = select(containerRef.current);
    const node = g.selectAll("circle");
    const link = g.selectAll("line");

    function dragStarted(event: any, d: any) {
      event.sourceEvent.stopPropagation();
      if (!event.active) force.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnded(event: any, d: any) {
      if (!event.active) force.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    node.call(
      drag().on("start", dragStarted).on("drag", dragged).on("end", dragEnded)
    );

    force.on("tick", () => {
      link
        .attr("x1", (d: TLinkDatum) => d.source.x + width / 2)
        .attr("y1", (d: TLinkDatum) => d.source.y + height / 2)
        .attr("x2", (d: TLinkDatum) => d.target.x + width / 2)
        .attr("y2", (d: TLinkDatum) => d.target.y + height / 2);

      node
        .attr("cx", (d: TNodeDatum) => d!.x! + width / 2)
        .attr("cy", (d: TNodeDatum) => d!.y! + height / 2);
    });
  }, [currentStrength]);

  return (
    <Fragment>
      <Dataframe
        title="Force Simulation Strength: "
        datasets={forceSets.map((item) => item.label)}
        onClick={(id) =>
          setStrength(forceSets.find((item) => item.label === id)!)
        }
        activeDataSet={currentStrength.label}
      />
      <Card ref={wrapperRef}>
        <Flex justifyContent="space-between">
          <Text size="s">Activate scroll zoom with ctrl + scroll</Text>
          <Button ref={buttonRef}>Zoom to Extent</Button>
        </Flex>
        <Svg ref={svgRef}>
          <g ref={containerRef} transform={currentZoomState?.toString()}></g>
        </Svg>
      </Card>
    </Fragment>
  );
}
