import React from "react";
import ReactDOM from "react-dom";
import "./LoadingPortal.css";
import { Waveform } from "@uiball/loaders";

export const LoadingPortal = () => {
  return ReactDOM.createPortal(
    <div className="loading-portal">
      <Waveform size={50} lineWeight={3.5} speed={1} color="black" />
    </div>,
    document.body
  );
};
