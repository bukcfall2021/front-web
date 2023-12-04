import React, { useEffect, useRef } from "react";
import Modal from "react-modal";
import useScrollController from "../../hooks/useScrollController";

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

  useScrollController(!isOpen);

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="overlay"
      className=" shadow border-[1px] border-slate-100 max-w-[1024px] h-[85vh] w-full p-4 bottom-0 absolute bg-half-white rounded-t-[60px] left-[50%] translate-x-[-50%] animate-slide-up"
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
