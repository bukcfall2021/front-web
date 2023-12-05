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
      className={`h-[85vh] w-full flex justify-center bottom-0 fixed  ${
        isOpen ? "animate-slide-up" : "animate-slide-down"
      }`}
      closeTimeoutMS={300}
      ariaHideApp={false}
    >
      <div
        ref={modalRef}
        className="flex flex-col items-center bg-white rounded-t-[60px] max-w-[1024px] overflow-y-auto p-4 overflow-hidden border-slate-100 w-full shadow border-[1px]"
      >
        <div className="h-1 w-16 bg-gray-300 rounded-full fixed" />
        {children}
      </div>
    </Modal>
  );
};

export default BottomSheet;
