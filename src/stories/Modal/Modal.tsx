import React, {  ReactNode } from "react";
import classnames from "classnames";
import "./Modal.scss";
import Icon from "../Icon/Icon.tsx";
import { closeModal } from "./ModalListener.tsx";

interface ModalProps {
  small: boolean;
  medium: boolean;
  children: ReactNode;
  dossierModal: boolean;
}

const Modal = ({ medium, small, children, dossierModal }: ModalProps) => {

  const onClose = () => {
    closeModal();
  };

  return (
    <div className={classnames("modal", { "modal-default": !small || !medium }, { "modal-medium": medium }, { "modal-small": small }, { "full-height": dossierModal })}>
      <div className={classnames("full-width", { "full-height": !dossierModal }, { "position-relative": dossierModal })}>
        <div className="modal-close-btn">
          <Icon name="times" onClick={() => onClose()} />
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  small: false,
  medium: false,
  children: <React.Fragment > Modal </React.Fragment>,
  dossierModal: false
};

export default Modal;
