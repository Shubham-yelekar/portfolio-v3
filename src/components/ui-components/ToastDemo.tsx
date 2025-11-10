"use client";
import React from "react";

import { useToast } from "@/app/providers/ToastProvider";
import Button from "../ui/Button";
const ToastDemo = () => {
  const { showToast } = useToast();

  const showNeutral = () => {
    showToast("Information", "neutral");
  };

  const showWarning = () => {
    showToast("Warning!!", "warning");
  };

  const showError = () => {
    showToast("Error!!", "error");
  };

  const showSucess = () => {
    showToast("Successful", "success");
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <Button variant={"secondary"} onClick={() => showNeutral()}>
        Info
      </Button>
      <Button variant={"secondary"} onClick={() => showWarning()}>
        Warning
      </Button>
      <Button variant={"secondary"} onClick={() => showSucess()}>
        Success
      </Button>
      <Button variant={"secondary"} onClick={() => showError()}>
        Error
      </Button>
    </div>
  );
};

export default ToastDemo;
