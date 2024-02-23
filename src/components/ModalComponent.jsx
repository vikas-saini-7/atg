import React from 'react';
import Modal from 'react-modal';
import { CSSTransition } from "react-transition-group";

const ModalComponent = ({ isOpen, closeModal, children }) => {
  return (
    <CSSTransition
          mountOnEnter
          unmountOnExit
          in={isOpen}
          timeout={{ enter: 700, exit: 700 }}
          classNames="modal"
        >
      <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal h-auto sm:h-[568px] lg:h-[548px] transition-all"
      overlayClassName="modal-overlay z-30"
      >
      {children}
      </Modal>
    </CSSTransition>
  );
};

export default ModalComponent;
