import { useState } from 'react';
import Dataframe from '../../modules/components/Dataframe';
import { Block } from '../../layout';
import {
  forceSets,
  TForceItem,
} from '../../modules/ForceSimulation/constants/data';
import ForceSimulation from '../../modules/ForceSimulation/ForceSimulation';

export default function ForceSimulationContainer() {
  const [currentStrength, setStrength] = useState<TForceItem>(forceSets[0]);
  return (
    <Block width={'50%'}>
      {' '}
      <Dataframe
        title="Force Simulation Strength: "
        datasets={forceSets.map(item => item.label)}
        onClick={id => setStrength(forceSets.find(item => item.label === id)!)}
        activeDataSet={currentStrength.label}
      />
      <ForceSimulation currentStrength={currentStrength} />
    </Block>
  );
}
