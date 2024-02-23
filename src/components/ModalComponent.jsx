import React from 'react';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';

const ModalComponent = ({ isOpen, closeModal, children }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={1000}
      classNames="modal-transition"
      unmountOnExit
    >
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal h-auto sm:h-[568px] lg:h-[548px]"
        overlayClassName="modal-overlay"
        >
        {children}
        </Modal>
    </CSSTransition>
  );
};

export default ModalComponent;
