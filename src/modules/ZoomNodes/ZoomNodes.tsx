import {
  useRef,
  useState,
  Fragment,
  RefObject,
  useEffect,
  useCallback,
} from 'react';
import { Card, Svg, Flex } from '../../layout';
import { Button, Circle, Text } from '../../atoms';
import NodesContainer from '../components/NodesContainer';
import EventsNodesContainer from '../components/EventsNodesContainer';
import TooltipContainer from '../components/TooltipContainer';
import type { TNode, TSubNode } from '../../data/types';
import useZoomBehaviour from '../hooks/useZoomBehaviour';

export default function ZoomNodes({ nodes }: any) {
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
    setActiveNodes([...nodes]);
  }, [nodes]);

  const { currentZoomState } = useZoomBehaviour({
    svgRef,
    buttonRef,
    activeNode,
    onZoomReset,
    wrapperRef,
  });

  return (
    <Fragment>
      <Card ref={wrapperRef}>
        <Flex justifyContent="space-between">
          <Text size="s">
            {activeNode ? `Node ${activeNode.id} is active` : ''}
          </Text>
          <Button ref={buttonRef}>Zoom to Extent</Button>
        </Flex>

        <Svg ref={svgRef}>
          <g transform={currentZoomState?.toString()}>
            <Circle
              x={10}
              y={10}
              radius={40}
              color="#000"
              onClick={useCallback(
                () =>
                  setActiveNode({
                    id: '1',
                    color: '#000',
                    radius: 40,
                    x: 10,
                    y: 10,
                    info: 'ad',
                    subNodes: [],
                  }),
                [],
              )}
            />
            <Circle
              x={25}
              y={100}
              radius={10}
              color="#000"
              onClick={useCallback(
                () =>
                  setActiveNode({
                    id: '2',
                    color: '#CCC',
                    radius: 10,
                    x: 25,
                    y: 100,
                    info: 'ad',
                    subNodes: [],
                  }),
                [],
              )}
            />
          </g>
        </Svg>
      </Card>
    </Fragment>
  );
}
