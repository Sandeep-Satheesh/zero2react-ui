import React from "react";
import "./footer.css";
import { Utils } from "../../utils/utils";

const Footer: React.FC = () => {
  let reactLogoPath : string = Utils.getAssetPath('react.svg');
  return (
    <footer className="footer mt-auto d-flex">
      <div className="d-flex align-items-center justify-content-center w-100">
        <p className="m-1">Built with ❤️ in </p>
        <img
            src={reactLogoPath}
            alt="React Logo"
            className="d-inline react-logo"
          />
        <p className="m-1"> by <a href="https://www.linkedin.com/in/sandeep-s-">Sandeep S</a></p>
      </div>
    </footer>
  );
};

export default Footer;
