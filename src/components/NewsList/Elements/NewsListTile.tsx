import React, { Dispatch, SetStateAction } from "react";
import css from "../NewsList.module.scss";
import { News } from "../../../interfaces/News";
import Date from "../../Date/Date";

interface NewsListTileProps {
  item: News;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setActiveArticle: Dispatch<SetStateAction<News | undefined>>;
}

const NewsListTile = (props: NewsListTileProps) => {
  const { item, setModalOpen, setActiveArticle } = props;

  return (
    <li
      className={css.newsList__tile}
      onClick={() => {
        setModalOpen(true);
        setActiveArticle(item);
      }}
    >
      {item.urlToImage && (
        <img
          src={item.urlToImage}
          alt={`News ${item.title}`}
          className={css.newsList__tile__image}
        />
      )}
      <span>
        <strong>{item.title}</strong>
        <br />
      </span>
      <span className={css.newsList__tile__description}>
        {item.description}
        <br />
        <br />
        <strong>Source: </strong>
        {item.source.name}
        <br />
        <strong>Published at: </strong>
        <Date date={item.publishedAt} />
      </span>
    </li>
  );
};

export default NewsListTile;
