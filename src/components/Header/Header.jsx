/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Header = ({ className, href }) => {
  return (
    <div className={`header ${className}`}>
      <div className="group">
        <div className="text-wrapper-5">Hi Everyone, I am</div>
        <div className="text-wrapper-6">BASIL SABU</div>
        <p className="p">B Tech Undergraduate Student from College of Engineering Trivandrum .</p>
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="download-from-the" alt="Download from the" />
          <a className="text-wrapper-7" href={href} rel="noopener noreferrer" target="_blank">
            Download CV
          </a>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="text-wrapper-8">Explore More</div>
        </div>
      </div>
      <div className="overlap-2">
        <div className="rectangle" />
        <img className="my-project" alt="My project" />
      </div>
    </div>
  );
};

Header.propTypes = {
  href: PropTypes.string,
};
