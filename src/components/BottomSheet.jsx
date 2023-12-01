import React from "react";
import Sheet from "react-modal-sheet";

const BottomSheet = ({ children, isOpen, setOpen }) => {
  const onClose = () => {
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <Sheet isOpen={isOpen} onClose={onClose}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default BottomSheet;
