import React from "react";
import { useTheme } from "../../context/themecontext";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${theme === "dark" ? "bg-black text-light" : "bg-white text-dark"}`}>
      <button onClick={toggleTheme} className="btn btn-outline-primary">
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
