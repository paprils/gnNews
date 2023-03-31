import React, { Dispatch, SetStateAction } from "react";
import css from "../NewsList.module.scss";
import { News } from "../../../interfaces/News";
import Date from "../../Date/Date";

interface NewsListListItemProps {
  item: News;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setActiveArticle: Dispatch<SetStateAction<News | undefined>>;
}

const NewsListListItem = (props: NewsListListItemProps) => {
  const { item, setModalOpen, setActiveArticle } = props;

  return (
    <li
      className={css.newsList__item}
      onClick={() => {
        setModalOpen(true);
        setActiveArticle(item);
      }}
    >
      <span>
        <strong>{item.title}</strong>
      </span>
      <br />
      <br />
      <strong>Source: </strong>
      {item.source.name}
      <br />
      <strong>Published at: </strong>
      <Date date={item.publishedAt} />
    </li>
  );
};

export default NewsListListItem;
