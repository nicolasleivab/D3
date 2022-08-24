import { forwardRef } from 'react';
import { animated, useSpring } from 'react-spring';

interface TCircle extends React.ComponentPropsWithRef<'circle'> {
  radius: number;
  color: string;
  x: number;
  y: number;
  onClick?: () => void;
}

const Circle = forwardRef(
  ({ radius, color, x, y, onClick }: TCircle, ref: any) => {
    const useAnimation = useSpring({
      x,
      y,
      radius,
      color,
      from: { x: 0, y: 0, radius: 1, color },
    });

    return (
      <animated.circle
        ref={ref}
        r={useAnimation.radius}
        fill={useAnimation.color}
        cx={useAnimation.x}
        cy={useAnimation.y}
        onClick={onClick}
      />
    );
  },
);

export default Circle;
