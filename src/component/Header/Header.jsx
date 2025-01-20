import React, { useState } from "react";
import "./Style1.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="logoClass">
          <h1>HM</h1>
        </div>

        <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#projectsBody">Project</a>
            </li>
            <li>
              <a href="#videoSectionBody">Content</a>
            </li>
            <li>
              <a href="#resumeDiv">Resume</a>
            </li>
            <li>
              <a href="#footerBackground">Hire Me</a>
            </li>
          </ul>
          <div className="icons">
            <a href="https://www.linkedin.com/in/hansraj01">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/hansraj_01">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/swanrule100">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href=" https://x.com/introverthu69">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </header>
    </>
  );
}

export default Header;
