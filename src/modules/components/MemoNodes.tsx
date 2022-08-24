import { useCallback, memo } from 'react';
import { Circle } from '../../atoms';
import { TNode } from '../../data/types';

type TMemoNode = TNode & { setActiveNode: (arg0: TNode | null) => void };

function MemoNode({
  id,
  x,
  y,
  radius,
  color,
  info,
  subNodes,
  setActiveNode,
}: TMemoNode) {
  const onCircleClick = useCallback(
    () =>
      setActiveNode({
        id,
        color,
        radius,
        x,
        y,
        info,
        subNodes,
      }),
    [id, color, radius, x, y, info, subNodes, setActiveNode],
  );
  return (
    <Circle x={x} y={y} radius={radius} color={color} onClick={onCircleClick} />
  );
}

export default memo(MemoNode);
