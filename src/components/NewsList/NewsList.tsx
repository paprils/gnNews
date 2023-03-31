import React from "react";
import css from "./NewsList.module.scss";
import { News } from "../../interfaces/News";
import NewsListListItem from "./Elements/NewsListListItem";
import NewsListTile from "./Elements/NewsListTile";
import Modal from "../Modal";
import useNewsList from "./NewsList.hook";
import { createPortal } from "react-dom";
import NewsListModal from "./Elements/NewsListModal";

interface NewsListProps {
  list: News[];
  type: "list" | "tiles";
}

const NewsList = (props: NewsListProps) => {
  const { list, type } = props;
  const { modalOpen, setModalOpen, activeArticle, setActiveArticle } =
    useNewsList();

  return (
    <React.Fragment>
      {modalOpen &&
        createPortal(
          <Modal setModalOpen={setModalOpen}>
            {activeArticle && <NewsListModal activeArticle={activeArticle} />}
          </Modal>,
          document.querySelector("#modal")!
        )}

      <ul className={css.newsList} data-list-type={type}>
        {list?.map((item: News) => {
          switch (type) {
            case "list":
              return (
                <NewsListListItem
                  item={item}
                  key={item.title}
                  setModalOpen={setModalOpen}
                  setActiveArticle={setActiveArticle}
                />
              );

            case "tiles":
              return (
                <NewsListTile
                  item={item}
                  key={item.title}
                  setModalOpen={setModalOpen}
                  setActiveArticle={setActiveArticle}
                />
              );

            default:
              return null;
          }
        })}
      </ul>
    </React.Fragment>
  );
};

export default NewsList;
