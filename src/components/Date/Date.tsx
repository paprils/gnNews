import React from "react";
import dayjs from "dayjs";

interface DateProps {
  date: string;
}

const Date = (props: DateProps) => {
  const { date } = props;
  return <React.Fragment>{dayjs(date).format("DD.MM.YYYY")}</React.Fragment>;
};

export default Date;
