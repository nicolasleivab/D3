import {
  useRef,
  useState,
  Fragment,
  RefObject,
  useEffect,
  useCallback,
} from 'react';
import MemoNodes from '../components/MemoNodes';
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
      <Card>
        <Flex justifyContent="space-between">
          <Text size="s">
            {activeNode ? `Node ${activeNode.id} is active` : ''}
          </Text>
          <Button ref={buttonRef}>Zoom to Extent</Button>
        </Flex>
        <div ref={wrapperRef} style={{ height: 500 }}>
          <Svg ref={svgRef}>
            <g transform={currentZoomState?.toString()}>
              {nodes.map(
                ({ id, x, y, radius, color, info, subNodes }: TNode) => (
                  <MemoNodes
                    key={id}
                    id={id}
                    x={x}
                    y={y}
                    radius={radius}
                    color={color}
                    info={info}
                    subNodes={subNodes}
                    setActiveNode={setActiveNode}
                  />
                ),
              )}
            </g>
          </Svg>
        </div>
      </Card>
    </Fragment>
  );
}
