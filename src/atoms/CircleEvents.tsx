import type { MouseEventHandler } from "react";

interface TCircleEvent extends React.ComponentPropsWithoutRef<"circle"> {
  radius: number;
  x: number;
  y: number;
  onMouseEnter?: MouseEventHandler<SVGCircleElement>;
  onMouseLeave?: () => void;
  onClick?: MouseEventHandler<SVGCircleElement>;
}

export default function Circle({
  radius,
  x,
  y,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: TCircleEvent) {
  return (
    <circle
      r={radius}
      fill="transparent"
      cx={x}
      cy={y}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
}
