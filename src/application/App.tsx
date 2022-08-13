import { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import HeaderComponent from '../components/Header/Header';
import { Flex, Block } from '../layout';
import ZoomNodes from '../components/ZoomNodes/ZoomNodes';
import ForceSimulation from '../components/ForceSimulation/ForceSimulation';
import { baseCSS } from '../styles/base';
import { theme } from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  ${baseCSS}
`;

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <Flex flexDirection='column'>
          <Block width={'50%'}>
            <ZoomNodes />
          </Block>
          <Block width={'50%'}>
            <ForceSimulation />
          </Block>
        </Flex>
      </ThemeProvider>
    </Fragment>
  );
}
