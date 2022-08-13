import { useRef, useEffect, useState } from 'react';
import { Card, Svg, Flex } from '../../layout';
import { Circle, Button } from '../../atoms';
import { zoom, zoomIdentity } from 'd3-zoom';
import { select } from 'd3-selection';

export default function ZoomNodes() {
  const svgRef = useRef<any>(null);
  const buttonRef = useRef<any>(null);
  const [currentZoomState, setCurrentZoomState] = useState();

  useEffect(() => {
    const svg = select(svgRef.current);

    // const svgContent = svg.select('.content');
    // const { width, height } =
    //   dimensions || wrapperRef.current.getBoundingClientRect();

    // zoom
    const zoomBehavior = zoom().on('zoom', (event) => {
      const zoomState = event.transform;

      setCurrentZoomState(zoomState);
    });

    svg.call(zoomBehavior);

    const resetZoom = () => svg.call(zoomBehavior.transform, zoomIdentity);
    buttonRef.current.onclick = resetZoom;

    return () => {
      svg.call(zoom().on('zoom', null));
    };
  }, []);

  return (
    <Card>
      <Flex justifyContent='flex-end'>
        <Button ref={buttonRef}>Zoom to Extent</Button>
      </Flex>

      <Svg ref={svgRef}>
        <g transform={currentZoomState}>
          <Circle size={10} color={'#CCC'} />
        </g>
      </Svg>
    </Card>
  );
}
