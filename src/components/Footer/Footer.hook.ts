import { useEffect, useState } from "react";

const useFooter = () => {
  const [currentTime, setCurrentTime] = useState<string>();

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { currentTime };
};

export default useFooter;
