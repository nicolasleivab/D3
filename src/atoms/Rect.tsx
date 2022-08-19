import { animated, useSpring } from "react-spring";
import type { MouseEventHandler } from "react";

interface TRect extends React.ComponentPropsWithoutRef<"rect"> {
  id: string;
  width: number;
  color: string;
  x: number;
  y: number;
  onClick: MouseEventHandler<SVGRectElement>;
}

export default function Rect({ width, color, x, y, onClick }: TRect) {
  const useAnimation = useSpring({
    x,
    y,
    width,
    color,
    from: { x, y, width: 1, color },
  });

  return (
    <animated.rect
      width={useAnimation.width}
      height={useAnimation.width}
      fill={useAnimation.color}
      x={useAnimation.x}
      y={useAnimation.y}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
}
