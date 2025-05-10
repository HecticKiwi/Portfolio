"use client";

import { ReactNode } from "react";
import { Slide, ToastContainer } from "react-toastify";

const ToastifyProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ToastContainer
        position="bottom-right"
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
};

export default ToastifyProvider;
