import { useState } from "react";
import { News } from "../../interfaces/News";

const useNewsList = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeArticle, setActiveArticle] = useState<News>();

  return { modalOpen, setModalOpen, activeArticle, setActiveArticle };
};

export default useNewsList;
