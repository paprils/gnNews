import React from "react";

const BlocksIcon = (props: { color: string }) => {
  const { color } = props;

  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.339844"
        y="0.169922"
        width="9.54117"
        height="9.54117"
        fill={color}
      />
      <rect
        x="0.339844"
        y="13.2891"
        width="9.54117"
        height="9.54117"
        fill={color}
      />
      <rect
        x="13.4609"
        y="0.169922"
        width="9.54117"
        height="9.54117"
        fill={color}
      />
      <rect
        x="13.4609"
        y="13.2891"
        width="9.54117"
        height="9.54117"
        fill={color}
      />
    </svg>
  );
};

export default BlocksIcon;
