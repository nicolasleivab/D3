import { useRef, useEffect, Fragment, useState, RefObject } from 'react';
import { Card, Svg } from '../../layout';
import { data, forceSets, TForceItem } from './constants/data';
import { Button, Text } from '../../atoms';
import { Flex } from '../../layout';
import { select } from 'd3-selection';
import {
  forceSimulation,
  forceLink,
  forceCenter,
  forceManyBody,
  forceCollide,
} from 'd3-force';
import { drag } from 'd3-drag';
import useZoomBehaviour from '../hooks/useZoomBehaviour';
import { colors } from './constants/colors';
import { TSvgSelection } from '../types';

export default function ForceSimulation({ currentStrength }: any) {
  const svgRef = useRef(null) as RefObject<SVGSVGElement>;
  const wrapperRef = useRef(null) as RefObject<HTMLDivElement>;
  const buttonRef = useRef(null) as RefObject<HTMLButtonElement>;
  const containerRef = useRef(null) as RefObject<SVGSVGElement>;

  const { currentZoomState } = useZoomBehaviour({
    svgRef,
    buttonRef,
    activeNode: null,
    onZoomReset: () => null,
  });

  useEffect(() => {
    const g: TSvgSelection = select(containerRef.current!);

    g.selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
      .style('stroke', '#999999')
      .style('stroke-opacity', 1);

    g.selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('circle')
      .attr('r', (d: any) => d.r)
      .style('stroke', '#000000')
      .style('stroke-width', 1.5)
      .style('fill', (d: any) => colors[+d.group]);
  }, []);

  useEffect(() => {
    const { width, height } = wrapperRef?.current?.getBoundingClientRect()!;

    const force = forceSimulation(data.nodes)
      .force('charge', forceManyBody().strength(currentStrength?.value))
      .force('link', forceLink(data.links))
      .force('center', forceCenter())
      .force(
        'collision',
        forceCollide().radius((d: any) => d.r),
      );

    const g: TSvgSelection = select(containerRef.current!);
    const node: any = g.selectAll('circle');
    const link = g.selectAll('line');

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
      drag().on('start', dragStarted).on('drag', dragged).on('end', dragEnded),
    );

    force.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x + width / 2)
        .attr('y1', (d: any) => d.source.y + height / 2)
        .attr('x2', (d: any) => d.target.x + width / 2)
        .attr('y2', (d: any) => d.target.y + height / 2);

      node
        .attr('cx', (d: any) => d!.x! + width / 2)
        .attr('cy', (d: any) => d!.y! + height / 2);
    });
  }, [currentStrength]);

  return (
    <Fragment>
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
