import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h5 className="text-center">All Rights Reserved &copy; Technology</h5>
      <p className="text-center">
        <Link to="/about">About</Link>
        <Link to="/policy">Policy</Link>
        <Link to="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default Footer;
