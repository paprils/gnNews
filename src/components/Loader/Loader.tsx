import React from "react";
import css from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={css.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
