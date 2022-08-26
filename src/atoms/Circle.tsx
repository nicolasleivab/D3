import { forwardRef } from 'react';
import { animated, useSpring } from 'react-spring';

interface TCircle extends React.ComponentPropsWithRef<'circle'> {
  radius: number;
  color: string;
  x: number;
  y: number;
  onClick?: () => void;
  onKeyDown?: React.KeyboardEventHandler<SVGCircleElement>;
  tabIndex?: number;
}

const Circle = forwardRef(
  (
    { radius, color, x, y, onClick, onKeyDown, tabIndex }: TCircle,
    ref: any,
  ) => {
    const useAnimation = useSpring({
      x,
      y,
      radius,
      color,
      from: { x: 0, y: 0, radius: 1, color },
    });

    return (
      <animated.circle
        focusable={!Boolean(tabIndex)}
        tabIndex={tabIndex || 0}
        ref={ref}
        r={useAnimation.radius}
        fill={useAnimation.color}
        cx={useAnimation.x}
        cy={useAnimation.y}
        onClick={onClick}
        onKeyDown={onKeyDown}
      />
    );
  },
);

export default Circle;
