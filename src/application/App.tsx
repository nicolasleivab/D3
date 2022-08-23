import { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import HeaderComponent from '../modules/Header/Header';
import { Flex } from '../layout';
import { Footer } from '../atoms';
import ForceSimulation from './containers/ForceSimulation';
import { baseCSS } from '../styles/base';
import { theme } from '../styles/theme';
import NodesContainer from './containers/ZoomNodes';

const GlobalStyle = createGlobalStyle`
  ${baseCSS}
`;

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <Flex flexDirection="column">
          <NodesContainer />
          <ForceSimulation />
        </Flex>
        <Flex>
          <Footer />
        </Flex>
      </ThemeProvider>
    </Fragment>
  );
}
