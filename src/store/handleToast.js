import { toast } from "react-toastify";
const handleToast = (success, message) => {
  if (success) {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  } else {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
};

export default handleToast;
