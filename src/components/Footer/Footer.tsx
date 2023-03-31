import React from "react";
import css from "./Footer.module.scss";
import useFooter from "./Footer.hook";
import { News } from "../../interfaces/News";

interface FooterProps {
  news: News[] | undefined;
}

const Footer = (props: FooterProps) => {
  const { news } = props;
  const { currentTime } = useFooter();

  return (
    <footer className={css.footer}>
      <strong>Current time: </strong>
      {currentTime}
      <br />

      <strong>Number of news: </strong>
      {news?.length}
    </footer>
  );
};

export default Footer;
