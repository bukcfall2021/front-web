import React, { useEffect, useRef } from "react";
import Modal from "react-modal";

const BottomSheet = ({ children, isOpen, setOpen }) => {
  const onClose = () => {
    if (setOpen) {
      setOpen(false);
    }
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="overlay"
      className="animate-slide-up h-[85vh] w-full p-4 bottom-0 absolute bg-half-white rounded-t-[60px]"
      closeTimeoutMS={300}
      ariaHideApp={false}
    >
      <div className="overflow-y-auto w-full h-full " ref={modalRef}>
        {children}
      </div>
    </Modal>
  );
};

export default BottomSheet;
