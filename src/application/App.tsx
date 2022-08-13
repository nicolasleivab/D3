import { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import HeaderComponent from "../components/Header/Header";
import { Flex, Block } from "../layout";
import ZoomNodes from "../components/ZoomNodes/ZoomNodes";
import ForceSimulation from "../components/ForceSimulation/ForceSimulation";
import { baseCSS } from "../styles/base";
import { theme } from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  ${baseCSS}
`;

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <Flex justifyContent="space-around">
          <Block>
            <ZoomNodes />
          </Block>
          <Block>
            <ForceSimulation />
          </Block>
        </Flex>
      </ThemeProvider>
    </Fragment>
  );
}
