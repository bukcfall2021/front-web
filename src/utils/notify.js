import toast from "react-hot-toast";

const notify = {
  error: (message) => {
    toast.error(message);
  },
  message: (message) => {
    toast(message);
  },
  success: (message) => {
    toast.success(message);
  },
};

export default notify;
