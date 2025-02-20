import React from "react";
import { useTheme } from "../../context/themecontext";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto d-flex align-items-center justify-content-center">
        <p className="m-1">Built with ❤️ in React by <a href="https://www.linkedin.com/in/sandeep-s-">Sandeep S</a></p>
    </footer>
  );
};

export default Footer;
