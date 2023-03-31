import { useState } from "react";

const useHeader = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  return { buttonClicked, setButtonClicked };
};

export default useHeader;
