import { Title, Button } from "../../atoms";
import { Flex, Block } from "../../layout";

type TDataframe = {
  datasets: string[];
  activeDataSet: string;
  title: string;
  onClick: (arg0: string) => void;
};

const Dataframe = ({ datasets, activeDataSet, title, onClick }: TDataframe) => {
  return (
    <Flex>
      <Block>
        <Title>{title}</Title>
      </Block>
      {datasets.map((dataset) => {
        return (
          <Block key={dataset}>
            <Button
              buttonType={activeDataSet === dataset ? "secondary" : "primary"}
              onClick={() => onClick(dataset)}
            >
              {dataset}
            </Button>
          </Block>
        );
      })}
    </Flex>
  );
};

export default Dataframe;
