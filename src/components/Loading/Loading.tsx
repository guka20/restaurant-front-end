import React from "react";
import "./Loading.css";
import { DotWave } from "@uiball/loaders";
export const Loading = () => {
  return (
    <div className="loading-component">
      <DotWave color="rgb(234, 88, 12)" />
    </div>
  );
};
