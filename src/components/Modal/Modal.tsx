import React, { Dispatch, SetStateAction } from "react";
import css from "./Modal.module.scss";
import useEscClicked from "../../hooks/useEscClicked";

interface ModalProps {
  children: React.ReactNode;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = (props: ModalProps) => {
  const { children, setModalOpen } = props;
  useEscClicked(() => setModalOpen(false));

  return (
    <div className={css.modal__wrapper}>
      <div className={css.modal}>
        <img
          src={"/cross.svg"}
          alt={"Cross icon"}
          className={css.modal__cross}
          onClick={() => setModalOpen(false)}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
