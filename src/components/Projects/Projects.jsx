
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
