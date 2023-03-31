import React from "react";
import css from "./Logo.module.scss";

const Logo = (props: { onClick: () => void }) => {
  const { onClick } = props;

  return (
    <div className={css.logo} onClick={onClick}>
      <span className={css.logo__bold}>gn</span>
      <span className={css.logo__light}>News</span>
    </div>
  );
};

export default Logo;
