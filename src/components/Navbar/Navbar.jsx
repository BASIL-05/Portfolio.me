/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Navbar = ({ className, href, href1, href2 }) => {
  return (
    <div className={`navbar ${className}`}>
      <div className="text-wrapper">BASIL SABU</div>
      <div className="div">
        <div className="text-wrapper-2">Home</div>
        <a className="text-wrapper-3" href={href} rel="noopener noreferrer" target="_blank">
          About
        </a>
        <div className="text-wrapper-4">Skill</div>
        <a className="text-wrapper-3" href={href1} rel="noopener noreferrer" target="_blank">
          Project
        </a>
        <a className="text-wrapper-3" href={href2} rel="noopener noreferrer" target="_blank">
          Contact
        </a>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
};
