import styled from 'styled-components';

interface TSvg extends React.ComponentPropsWithRef<'svg'> {}

const Svg = styled.svg<TSvg>`
  width: 100%;
  height: 100%;
`;

export default Svg;
