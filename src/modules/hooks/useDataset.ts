import {useState, useMemo, useCallback} from 'react'
import { generateCircles } from '../../data/generate-circles'

const useDataset = ({datasets}: {datasets: string[]}) => {
    const [activeDataset, setActiveDataset] = useState(datasets[0])

    const circles = useMemo(() => generateCircles(activeDataset), [activeDataset]);
    
    const onButtonClick = useCallback((id: string) => {
        setActiveDataset(id);
    }, []);

  return {circles, activeDataset, onButtonClick}
}

export default useDataset;