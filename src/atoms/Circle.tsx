import styled from 'styled-components';
import type { MouseEventHandler } from 'react';

interface TCircle extends React.ComponentPropsWithoutRef<'circle'> {
  size: number;
  color: string;
  x?: number;
  y?: number;
  onMouseEnter?: MouseEventHandler<SVGCircleElement>;
  onMouseLeave?: () => void;
}

const StyledCircle = styled.circle<TCircle>`
  fill: ${({ color }) => color};
  r: ${({ size }) => size};
  cx: ${({ x, size }) => x || size};
  cy: ${({ y, size }) => y || size};
`;

export default function Circle({
  size,
  color,
  x,
  y,
  onMouseEnter,
  onMouseLeave,
}: TCircle) {
  return (
    <StyledCircle
      size={size}
      color={color}
      x={x}
      y={y}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
