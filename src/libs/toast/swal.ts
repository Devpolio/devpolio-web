import Swal from "sweetalert2";

type ToastType = "success" | "error" | "warning" | "info" | "question";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const showToast = (icon: ToastType, title: string) => {
  Toast.fire({
    icon,
    title,
  });
};
