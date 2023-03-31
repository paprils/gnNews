import React from "react";

const ListIcon = (props: { color: string }) => {
  const { color } = props;

  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.5"
        y1="2.24805"
        x2="21.1603"
        y2="2.24805"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="11.7891"
        x2="21.1603"
        y2="11.7891"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="21.3311"
        x2="21.1603"
        y2="21.3311"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ListIcon;
