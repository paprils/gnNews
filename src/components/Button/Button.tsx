import React from "react";
import css from "./Button.module.scss";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { label, onClick } = props;

  return (
    <button className={css.button} type={"button"} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
