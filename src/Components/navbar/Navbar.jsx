import React, { useState } from "react";
import "./Navbar.css";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" >
      <div className="navbar-menu">

      <Link to="/" className="navbar-brand">
        Reza's Website
      </Link>
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      </div>
      <div className={`navbar-controls ${menuOpen ? "open" : ""}`}>
        <Link to='/' className="language-btn" onClick={toggleMenu}>
          <HomeIcon/>
        </Link>
        <Link to="/education" className="language-btn" onClick={toggleMenu}>
          Education
        </Link>
        <Link to="/experience" className="language-btn" onClick={toggleMenu}>
          Experiences
        </Link>
        <button className="language-btn"> EN / DE</button>
        <button className="theme-btn">
          <BedtimeIcon /> / <LightModeIcon />
        </button>
      </div>
    </nav>
  );
}