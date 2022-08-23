// import { Fragment, useState } from 'react';
// import { TNode, TSubNode } from '../../data/types';
import useDataset from '../../modules/hooks/useDataset';
import { datasets } from '../../modules/ZoomNodes/constants';
import Dataframe from '../../modules/components/Dataframe';
import ZoomNodes from '../../modules/ZoomNodes/ZoomNodes';
import { Block } from '../../layout';

export default function ZoomNodesContainer() {
  const { nodes, onButtonClick, activeDataset } = useDataset({ datasets });

  return (
    <Block width={'50%'}>
      <Dataframe
        datasets={datasets}
        activeDataSet={activeDataset}
        title={'Nodes Datasets:'}
        onClick={id => {
          onButtonClick(id);
        }}
      />

      <ZoomNodes nodes={nodes} />
    </Block>
  );
}
