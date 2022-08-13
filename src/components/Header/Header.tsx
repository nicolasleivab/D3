import { Header } from "../../atoms";
import { Flex, Block } from "../../layout";

export default function HeaderComponent() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Block>
        <Header>D3 Nodes Zoom and Force Simulation</Header>
      </Block>
    </Flex>
  );
}
