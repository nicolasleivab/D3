import { RefObject, useEffect, useState } from "react";
import { zoom, zoomIdentity } from "d3-zoom";
import { select } from "d3-selection";
import { TNode } from "../../data/types";
import type { ZoomTransform } from "d3-zoom";
import type { TSvgSelection, TZoomBehaviour } from "../types";

type TUseZoom = {
  svgRef: RefObject<SVGSVGElement>;
  buttonRef: RefObject<HTMLButtonElement>;
  wrapperRef: any;
  activeNode: TNode | null;
  onZoomReset: () => void;
};

export default function useZoomBehaviour({
  svgRef,
  buttonRef,
  activeNode,
  wrapperRef,
  onZoomReset,
}: TUseZoom) {
  const [currentZoomState, setCurrentZoomState] = useState<ZoomTransform>();

  useEffect(() => {
    const svg: TSvgSelection = select(svgRef.current!);

    const zoomBehavior: TZoomBehaviour = zoom()
      .filter((event: any) => {
        if (event.type === "wheel") {
          return event.ctrlKey;
        }

        return true;
      })
      .on("zoom", (event) => {
        const zoomState = event.transform;

        setCurrentZoomState(zoomState);
      });

    svg.call(zoomBehavior);

    const resetZoom = () => {
      svg.transition().duration(350).call(zoomBehavior.transform, zoomIdentity);
      onZoomReset();
    };
    const {width, height} = wrapperRef?.current?.getBoundingClientRect();
  
    if(activeNode){
      const scale = width < height ? width/activeNode.radius/2 : height/activeNode.radius/2
      svg.transition().duration(350).call(zoomBehavior.transform, zoomIdentity.translate(-scale*activeNode.x + width/2, -scale*activeNode.y + height/2).scale(scale));
    } else {
      resetZoom();
    }

    buttonRef.current!.onclick = resetZoom;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeNode]);

  return { currentZoomState };
}
