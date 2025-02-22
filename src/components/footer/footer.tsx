import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto d-flex">
      <div className="d-flex align-items-center justify-content-center w-100">
        <p className="m-1">Built with ❤️ in </p>
        <img
            src="../../src/assets/react.svg"
            alt="React Logo"
            className="d-inline react-logo"
          />
        <p className="m-1"> by <a href="https://www.linkedin.com/in/sandeep-s-">Sandeep S</a></p>
      </div>
    </footer>
  );
};

export default Footer;
