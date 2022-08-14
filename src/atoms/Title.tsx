import styled from "styled-components";

interface TTitle extends React.ComponentPropsWithoutRef<"h3"> {}

const SecondTitle = styled.h3<TTitle>`
  text-align: center;
`;

export default SecondTitle;
