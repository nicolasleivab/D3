import type { MouseEventHandler } from 'react';

interface TCircleEvent extends React.ComponentPropsWithoutRef<'circle'> {
  radius: number;
  x: number;
  y: number;
  onMouseEnter?: MouseEventHandler<SVGCircleElement>;
  onMouseLeave?: () => void;
}

export default function Circle({
  radius,
  x,
  y,
  onMouseEnter,
  onMouseLeave,
}: TCircleEvent) {
  return (
    <circle
      r={radius}
      fill='transparent'
      cx={x}
      cy={y}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
