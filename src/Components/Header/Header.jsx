import React from "react";
import "./Header.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";
// import "./Responsive.css";
import { Link } from "react-router-dom";



export default function Header() {
  return (
    <div>
      
      <header className="header">
        <img src="cropped-IMG_0078.png" alt="avatar" />
        <div className="title">
          <h1>Reza Tajadod</h1>
          <h2 className="position">
            <ArrowForwardIosIcon className="fa-solid fa-angle-right" />
            Frontend Developer Intern
          </h2>
          <Link
            className="button outline icon"
            to="https://github.com/Reza-Tjd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="fa-brands fa-github" />
            My Github Profile
          </Link>
        </div>
        {/* <Link
          className="button outline lang icon small"
          to="/de"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <PublicIcon className="fa-solid fa-globe" />
          DE
        </Link> */}
      </header>
    </div>
  );
}
