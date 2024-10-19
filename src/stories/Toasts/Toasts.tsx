import React, { useState } from "react";
import SnackBarToast from "./SnackBarToast.tsx";

interface SnackBarToastProps {
  open: boolean,
  message: string,
  onClose: Function,
  variant: "Success" | "Error" | "Info" | "Warning",
}

export const Toasts = ({ onClose, message, variant }: SnackBarToastProps) => {

  const [open, setOpen] = useState(true)
  const clearError = () => {
    setOpen(false)
  }
  return <SnackBarToast open={open}  onClose={clearError}  message={message} variant={variant} />;
};

SnackBarToast.defaultProps = {
  open: true,
  message: "Toast bar opened !",
  variant: 'Info',
};
export default Toasts;
