import React from "react";
import ListIcon from "./Elements/ListIcon";
import BlocksIcon from "./Elements/BlocksIcon";

interface IconProps {
  type: "list" | "tiles";
  color: string;
  onClick: () => void;
}

const Icon = (props: IconProps) => {
  const { type, onClick, color } = props;

  switch (type) {
    case "list":
      return (
        <div onClick={onClick} style={{ cursor: "pointer" }}>
          <ListIcon color={color} />
        </div>
      );

    case "tiles":
      return (
        <div onClick={onClick} style={{ cursor: "pointer" }}>
          <BlocksIcon color={color} />
        </div>
      );

    default:
      return null;
  }
};

export default Icon;
