import { animated, useSpring } from "react-spring";

interface TCircle extends React.ComponentPropsWithoutRef<"circle"> {
  radius: number;
  color: string;
  x: number;
  y: number;
}

export default function Circle({ radius, color, x, y }: TCircle) {
  const useAnimation = useSpring({
    x,
    y,
    radius,
    color,
    from: { x: 0, y: 0, radius: 1, color },
  });

  return (
    <animated.circle
      r={useAnimation.radius}
      fill={useAnimation.color}
      cx={useAnimation.x}
      cy={useAnimation.y}
    />
  );
}
