import { toast, TypeOptions } from "react-toastify";

export const showToast = (message: string, type?: TypeOptions) => {
  toast.success(message, {
    type: type ?? "success",
    autoClose: 5000,
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
