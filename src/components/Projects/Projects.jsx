/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Projects = ({ className, overlapGroupClassName }) => {
  return (
    <div className={`projects ${className}`}>
      <div className={`overlap-group-3 ${overlapGroupClassName}`}>
        <div className="text-wrapper-12">Projects</div>
        <div className="text-wrapper-13">What I have made?</div>
      </div>
    </div>
  );
};
