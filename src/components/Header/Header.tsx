import React from "react";
import css from "./Header.module.scss";
import Logo from "../Logo";
import Icon from "../Icon";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectListType,
  setListType,
} from "../../features/listType/listTypeSlice";
import useHeader from "./Header.hook";
import { createPortal } from "react-dom";
import Modal from "../Modal";
import { useHistory } from "react-router-dom";

const Header = () => {
  const dispatch = useAppDispatch();
  const listType = useAppSelector(selectListType);
  const { buttonClicked, setButtonClicked } = useHeader();
  const history = useHistory();

  return (
    <React.Fragment>
      {buttonClicked &&
        createPortal(
          <Modal setModalOpen={setButtonClicked}>
            <strong>The hardest part:</strong>
            Writing tests - I've actually failed this part of the task. It's
            something I haven't done before and encountered several errors I
            wasn't able to resolve on my own.
            <br />
            <br />
            <strong>Most fun part:</strong>
            Styling and setting up redux - I've done it only once before with
            senior dev's help so it was nice to do it on my own.
          </Modal>,
          document.querySelector("#modal")!
        )}

      <div className={css.header__wrapper}>
        <nav className={css.header}>
          <Logo onClick={() => history.push("/")} />
          <div className={css.header__buttons}>
            <Icon
              type={"list"}
              color={listType.type === "list" ? "#00E0FF" : "#000"}
              onClick={() => {
                dispatch(setListType({ type: "list" }));
              }}
            />
            <Icon
              type={"tiles"}
              color={listType.type === "tiles" ? "#00E0FF" : "#000"}
              onClick={() => {
                dispatch(setListType({ type: "tiles" }));
              }}
            />
            <Button
              label={"Click me!"}
              onClick={() => setButtonClicked(!buttonClicked)}
            />
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
