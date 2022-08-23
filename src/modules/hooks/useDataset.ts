import { useState, useMemo, useCallback } from "react";
import { generateNodes } from "../../data/generate-nodes";

const useDataset = ({ datasets }: { datasets: string[] }) => {

  const [activeDataset, setActiveDataset] = useState(datasets[0]);
  
  const nodes = useMemo(() => generateNodes(activeDataset), [activeDataset]);

  const onButtonClick = useCallback((id: string) => {
    setActiveDataset(id);
  }, []);

  return { nodes, activeDataset, onButtonClick };
};

export default useDataset;
