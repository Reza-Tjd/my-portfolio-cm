import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import "./New-Header.css"

export default function Header() {
  const [textAlign, setTextAlign] = useState("center");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setTextAlign("center");
      } else {
        setTextAlign("left");
      }
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <img src="cropped-IMG_0078.png" alt="avatar" />
        <div className="title">
          <h1 style={{ textAlign: textAlign }}>Reza Tajadod</h1>
          <h2 className="position">Frontend Developer Intern</h2>
          <Link
            className="button outline icon"
            to="https://github.com/Reza-Tjd"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: textAlign }}
          >
            <GitHubIcon className="fa-brands fa-github" style={{ marginRight: '7px' }} />
            My Github Profile
          </Link>
        </div>
      </header>
    </div>
  );
}
