import React from "react";
import { News } from "../../../interfaces/News";
import css from "../NewsList.module.scss";

interface NewsListModalProps {
  activeArticle: News;
}

const NewsListModal = (props: NewsListModalProps) => {
  const { activeArticle } = props;

  return (
    <div className={css.newsList__modal}>
      <strong>{activeArticle.title}</strong>
      <br /> <br />
      <p dangerouslySetInnerHTML={{ __html: activeArticle.content }} />
      <br /> <br />
      {activeArticle.author && (
        <span>
          <strong>Author: </strong>
          {activeArticle.author}
        </span>
      )}
      <br />
      <a href={activeArticle.url} target={"_blank"} rel={"noreferrer"}>
        Source
      </a>
    </div>
  );
};

export default NewsListModal;
