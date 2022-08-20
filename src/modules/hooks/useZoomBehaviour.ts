import { RefObject, useEffect, useState } from "react";
import { zoom, zoomIdentity } from "d3-zoom";
import { select } from "d3-selection";
import { TNode } from "../../data/types";
import type { ZoomTransform } from "d3-zoom";
import type { TSvgSelection, TZoomBehaviour } from "../types";

type TUseZoom = {
  svgRef: RefObject<SVGSVGElement>;
  buttonRef: RefObject<HTMLButtonElement>;
  activeNode: TNode | null;
  onZoomReset: () => void;
};

export default function useZoomBehaviour({
  svgRef,
  buttonRef,
  activeNode,
  onZoomReset,
}: TUseZoom) {
  const [currentZoomState, setCurrentZoomState] = useState<ZoomTransform>();

  useEffect(() => {
    const svg: TSvgSelection = select(svgRef.current!);

    const zoomBehavior: TZoomBehaviour = zoom()
      .filter((event: any) => {
        if (event.type === "wheel") {
          return event.ctrlKey && Boolean(!activeNode);
        }
        if (event.type === "dblclick" || event.type === "mousedown") {
          return Boolean(!activeNode);
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
    buttonRef.current!.onclick = resetZoom;
  }, [svgRef, buttonRef, activeNode, onZoomReset]);

  return { currentZoomState };
}
