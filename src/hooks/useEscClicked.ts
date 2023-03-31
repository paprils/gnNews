import { useCallback, useEffect } from "react";

const useEscClicked = (callback: () => void) => {
  const escFunction = useCallback(
    (event: { key: string }) => {
      if (event.key === "Escape") {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);
};

export default useEscClicked;
