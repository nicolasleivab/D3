import { useEffect, useState } from "react";

const useWrapperDimensions = (ref: any) => {
  const [dimensions, setDimensions] = useState<{
    height: number;
    width: number;
  }>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    if (ref && ref.current) {
      const wrapper = ref.current.getBoundingClientRect();

      const handleResize = () => {
        setDimensions({
          height: wrapper.height,
          width: wrapper.width,
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [ref]);

  return dimensions;
};

export default useWrapperDimensions;
