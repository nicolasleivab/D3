import { useCallback, memo } from 'react';
import { Circle } from '../../atoms';
import { TNode } from '../../data/types';

type TMemoNode = TNode & {
  setActiveNode: (arg0: TNode | null) => void;
  tabIndex: number;
};

function MemoNode({
  id,
  x,
  y,
  radius,
  color,
  info,
  subNodes,
  setActiveNode,
  tabIndex,
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
    <Circle
      tabIndex={tabIndex}
      x={x}
      y={y}
      radius={radius}
      color={color}
      onClick={onCircleClick}
      onKeyDown={e => (e.key === 'Enter' ? onCircleClick() : null)}
    />
  );
}

export default memo(MemoNode);
