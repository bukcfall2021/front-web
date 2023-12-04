import { useEffect } from "react";

const useScrollController = (allowed) => {
  useEffect(() => {
    if (allowed) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [allowed]);
};

export default useScrollController;
