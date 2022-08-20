import { select } from "d3-selection";
import type { Selection } from "d3-selection";
import { transition } from "d3-transition";
import { ZoomBehavior } from "d3-zoom";

export type TSvgSelection = Selection<SVGSVGElement, unknown, any, unknown>;

select.prototype.transition = transition;

export type TZoomBehaviour = ZoomBehavior<any, unknown>;
