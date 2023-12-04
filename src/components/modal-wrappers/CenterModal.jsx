import React from "react";
import Modal from "react-modal";

const CenterModal = ({ isOpen, setOpen, children }) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="top-0 left-0 w-screen h-screen fixed bg-slate-300 bg-transparent-gray"
      className="order-modal fixed top-[50%] translate-y-[-50%] z-20 "
      closeTimeoutMS={300}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <div className="w-screen flex justify-center">{children}</div>
    </Modal>
  );
};

export default CenterModal;
