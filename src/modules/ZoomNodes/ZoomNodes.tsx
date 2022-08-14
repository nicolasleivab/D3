import { useRef, useEffect, useState, Fragment } from 'react';
import { Card, Svg, Flex } from '../../layout';
import { Button } from '../../atoms';
import { zoom, zoomIdentity } from 'd3-zoom';
import { datasets } from './constants';
import Dataframe from '../components/Dataframe';
import NodesContainer from '../components/NodesContainer';
import EventsNodesContainer from '../components/EventsNodesContainer';
import TooltipContainer from '../components/TooltipContainer';
import useDataset from '../hooks/useDataset';
import type { TNode } from '../../data/generate-nodes';
import { select } from 'd3-selection';

export default function ZoomNodes() {
  const svgRef = useRef<any>(null);
  const buttonRef = useRef<any>(null);
  const [currentZoomState, setCurrentZoomState] = useState();
  const [hoveredNode, setHoveredNode] = useState<TNode | null>(null);
  const [activeNode, setActiveNode] = useState<TNode | null>(null);

  useEffect(() => {
    const svg: any = select(svgRef.current);

    const zoomBehavior = zoom()
      .filter((event: any) => {
        if (event.type === 'wheel') {
          return event.ctrlKey;
        }

        return true;
      })
      .on('zoom', (event) => {
        const zoomState = event.transform;

        setCurrentZoomState(zoomState);
      });

    svg.call(zoomBehavior);

    const resetZoom = () => {
      svg.transition().duration(350).call(zoomBehavior.transform, zoomIdentity);
      setActiveNode(null);
    };
    buttonRef.current.onclick = resetZoom;

    return () => {
      svg.call(zoom().on('zoom', null));
    };
  }, []);

  const { nodes, onButtonClick, activeDataset } = useDataset({ datasets });

  return (
    <Fragment>
      <Dataframe
        datasets={datasets}
        activeDataSet={activeDataset}
        title={'Nodes Datasets:'}
        onClick={onButtonClick}
      />
      <Card>
        <Flex justifyContent='flex-end'>
          <Button ref={buttonRef}>Zoom to Extent</Button>
        </Flex>

        <Svg ref={svgRef}>
          <NodesContainer
            activeNode={activeNode}
            nodes={nodes}
            currentZoomState={currentZoomState}
          />
          <TooltipContainer hoveredNode={hoveredNode} />
          {!activeNode ? (
            <EventsNodesContainer
              nodes={nodes}
              currentZoomState={currentZoomState}
              setHoveredNode={setHoveredNode}
              setActiveNode={setActiveNode}
            />
          ) : null}
        </Svg>
      </Card>
    </Fragment>
  );
}
