import styled from "styled-components";

interface TFooter extends React.ComponentPropsWithoutRef<"footer"> {}

const StyledFooter = styled.footer<TFooter>`
  margin: ${({
    theme: {
      spacing: { margin },
    },
  }) => margin.m};
  text-align: center;
`;

export default function Footer() {
  return (
    <StyledFooter>{`Candidate: Nicolás Leiva Büchi ${new Date().getFullYear()}.`}</StyledFooter>
  );
}
