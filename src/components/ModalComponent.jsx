import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, closeModal, children }) => {
  return (
      <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal h-auto sm:h-[568px] lg:h-[548px] transition-all"
      overlayClassName="modal-overlay z-30"
      >
      {children}
      </Modal>
  );
};

export default ModalComponent;
