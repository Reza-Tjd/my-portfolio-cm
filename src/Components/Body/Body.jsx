import React, { useRef, useState, useEffect } from "react";
import "./Body.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Responsive.css";
import Footer from "../Footer/Footer";

import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
export default function Body() {
  const [email, setEmail] = useState("rtajadod@jacobs-university.de");
  const [phoneNumber, setPhoneNumber] = useState("+4917674881374");
  const [copied, setCopied] = useState(false);
  const [showUpButton, setShowUpButton] = useState(false);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text); // Write text to clipboard
    setCopied(true); // Set copied to true
    // Hide the "Copied" message after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const aboutMeRef = useRef(null);
  const mySkillRef = useRef(null);
  const myProjectsRef = useRef(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMySkill = () => {
    mySkillRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMyProjects = () => {
    myProjectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    setShowUpButton(scrollPosition >= 500);
  };

  useEffect(() => {
    // Add event listener to window for scroll event
    window.addEventListener("scroll", handleScroll);
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleUpButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className=" newContainer">
        {/* <Header/> */}
        <nav className="sticky-nav">
          <ul>
            <li onClick={scrollToAboutMe}>
              <span className="marker">
                <ArrowForwardIosIcon className="fa-solid fa-angle-right" />
              </span>
              About Me
            </li>
            <li onClick={scrollToMySkill}>
              <span className="marker">
                <ArrowForwardIosIcon className="fa-solid fa-angle-right" />
              </span>
              My Skills
            </li>
            <li onClick={scrollToMyProjects}>
              <span className="marker">
                <ArrowForwardIosIcon className="fa-solid fa-angle-right" />
              </span>
              My Projects
            </li>
          </ul>
        </nav>
        <div className="sections">
          <section id="about-me" ref={aboutMeRef}>
            <h4 className="about-title">About Me</h4>
            <p>
              A dedicated, energetic, hard-working, and eager-to-learn Frontend
              Developer Intern who can work independently or as an active team
              member , able to learn new assignments very quickly. I am looking
              for a stimulating IT internship where I can use my educational
              background and specific pieces of training to add value to the
              company.
            </p>
            <div className="contact">
              <div className="personalData">
                <h5>Email</h5>
                <p className="edit">
                  {email}
                  <ContentCopyIcon
                    style={{ width: 20, marginLeft: 10 }}
                    className="iconEdit"
                    onClick={() => copyToClipboard(email)} // Call copyToClipboard function on click
                  />
                </p>
              </div>
              <div>
                <h5>Phone Number</h5>
                <p className="edit">
                  {phoneNumber}
                  <ContentCopyIcon
                    style={{ width: 20, marginLeft: 10 }}
                    className="iconEdit"
                    onClick={() => copyToClipboard(phoneNumber)} // Call copyToClipboard function on click
                  />
                </p>
              </div>
            </div>
            <h5 className="socialMedia">Social Media</h5>
            {/* <Link
              to={{ pathname: "https://www.linkedin.com/in/reza-tajadod/" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                className="linkdin"
                style={{ width: 50, height: 50 }}
              />
            </Link> */}

            <a
              href="https://www.linkedin.com/in/reza-tajadod/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                className="linkedin"
                style={{ width: 50, height: 50 }}
              />
            </a>
            <h4 className="skill-title">My Skills</h4>
            <h5 className="languageTitle">Languages</h5>
            <div className="languages">
              <div>
                <p>German</p>
                <p>Intermediate (B1)</p>
              </div>
              <div>
                <p>English</p>
                <p>Advanced (C1)</p>
              </div>
              <div>
                <p>Persian</p>
                <p>Mother tongue (C2) </p>
              </div>
            </div>
          </section>
          <section id="skills" ref={mySkillRef}>
            <h5 className="technologyTitle">Technologies</h5>
            <ul className="skills">
              <li>
                <span className="title">
                  <i
                    class="fa-brands fa-html5"
                    style={{ color: "orange", fontSize: "17px" }}
                  >
                    HTmL
                  </i>
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Advanced
                </span>
              </li>
              <li>
                <span className="title">
                  <i
                    class="fa-brands fa-css3-alt"
                    style={{ color: "#46AAE8", fontSize: "17px" }}
                  >
                    {" "}
                    CSS3
                  </i>
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Advanced
                </span>
              </li>
              <li>
                <span className="title">
                  <i
                    class="fa-brands fa-js"
                    style={{ color: "#E8E30F", fontSize: "17px" }}
                  >
                    JavaScript
                  </i>
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Advanced
                </span>
              </li>
              <li>
                <span className="title">
                  <i
                    class="fa-brands fa-react"
                    style={{ color: "#0FDEE8", fontSize: "17px" }}
                  >
                    React
                  </i>
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Advanced
                </span>
              </li>
            </ul>
            <h5 className="mt-64">Tools</h5>
            <ul className="skills">
              <li>
                <span className="title">
                  <i
                    class="fa-brands fa-git-alt"
                    style={{ color: "#C1360D", fontSize: "17px" }}
                  >
                    Git
                  </i>
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Advanced
                </span>
              </li>
              <li>
                <span className="title">
                  <i
                    class="fa-solid fa-code"
                    style={{ color: "#146DD7", fontSize: "17px" }}
                  >
                    VS Code
                  </i>
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Advanced
                </span>
              </li>
            </ul>
            <h5 className="mt-64">Other Skills</h5>
            <ul className="other-skills">
              <li>Material UI</li>
              <li>Saas</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>Agile Methodology</li>
              <li>Responsive Web Design</li>
            </ul>
          </section>
          {/* sdadfadfadf */}
          <section id="projects" ref={myProjectsRef}>
            <h5 className="myproject-title">My Projects</h5>
            <div className="projects">
              <div className="projects">
                <div className="project">
                  <img src="/img/placeholder.png" alt="" />

                  <div class="title">My Portfolio</div>
                  <p class="description">
                    I've crafted a website serving as my resume, continually
                    developing it as I acquire new skills.
                  </p>
                  <div class="tech">
                    <span> Tech Used:</span>
                    <ul>
                      <li>
                        <i
                          class="fa-brands fa-html5"
                          style={{
                            color: "orange",
                            fontSize: "25px",
                            marginRight: "5px",
                          }}
                        ></i>
                      </li>
                      <li>
                        <i
                          class="fa-brands fa-css3-alt"
                          style={{
                            color: "#46AAE8",
                            fontSize: "25px",
                            marginRight: "5px",
                          }}
                        ></i>
                      </li>
                      <li>
                        <i
                          class="fa-brands fa-js"
                          style={{
                            fontSize: "25px",
                            color: "#E8E30F",
                            marginRight: "5px",
                          }}
                        ></i>
                      </li>
                      <li>
                        <i
                          class="fa-brands fa-react"
                          style={{ fontSize: "25px", color: "#0FDEE8" }}
                        ></i>
                      </li>
                    </ul>
                  </div>
                  <div class="buttons">
                    <a
                      class="button ghost"
                      href="https://reza-tjd.github.io/my-portfolio-cm/"
                      target="_blank"
                    >
                      <i class="fa-regular fa-eye"></i>Demo
                    </a>
                    <a
                      href="https://github.com/Reza-Tjd/my-portfolio-cm"
                      class="button outline dark"
                      target="_blank"
                    >
                      <i class="fa-brands fa-github"></i>View Code
                    </a>
                  </div>
                </div>
                <div className="project">
                  <img src="/img/placeholder.png" alt="" />
                  <div className="title">Neighborhood Connect </div>
                  <p className="description">
                    As one of my Master's degree courses, i worked on a Capstone
                    project. I'm currently developing a communication network
                    tailored for neighborhood use.
                  </p>
                  <div className="tech">
                    <span> Tech Used:</span>
                    <ul>
                      <li>
                        <i
                          class="fa-brands fa-html5"
                          style={{
                            color: "orange",
                            fontSize: "25px",
                            marginRight: "5px",
                          }}
                        ></i>
                      </li>
                      <li>
                        <i
                          class="fa-brands fa-css3-alt"
                          style={{
                            color: "#46AAE8",
                            fontSize: "25px",
                            marginRight: "5px",
                          }}
                        ></i>
                      </li>
                      <li>
                        <i
                          class="fa-brands fa-js"
                          style={{
                            fontSize: "25px",
                            color: "#E8E30F",
                            marginRight: "5px",
                          }}
                        ></i>
                      </li>
                      <li>
                        <i
                          class="fa-brands fa-react"
                          style={{ fontSize: "25px", color: "#0FDEE8" }}
                        ></i>
                      </li>
                    </ul>
                  </div>
                  <div class="buttons">
                    <a
                      class="button ghost"
                      target="_blank"
                      href="https://reza-tjd.github.io/neighboarhood-connect/"
                    >
                      <i class="fa-regular fa-eye"></i>Demo
                    </a>
                    <a
                      href="https://github.com/Reza-Tjd/neighboarhood-connect"
                      class="button outline dark"
                      target="_blank"
                    >
                      <i class="fa-brands fa-github"></i>View Code
                    </a>
                  </div>
                </div>
                <div class="project">
                  <img src="/img/placeholder.png" alt="" />
                  <div class="title">Project Tilte</div>
                  <p class="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div class="tech">
                    <span> Tech Used:</span>
                    <ul>
                      <li>
                        <i
                          class="fa-brands fa-html5"
                          style={{
                            color: "orange",
                            fontSize: "25px",
                            marginRight: "5px",
                          }}
                        ></i>
                      </li>
                      <li>
                        <i
                          class="fa-brands fa-sass"
                          style={{
                            fontSize: "25px",
                            marginRight: "5px",
                            color: "#DD7DB3",
                          }}
                        ></i>
                      </li>

                      <li>
                        <i
                          class="fa-brands fa-bootstrap"
                          style={{
                            color: "#922DFC",
                            fontSize: "25px",
                            marginRight: "5px",
                          }}
                        ></i>
                      </li>
                      <li>
                        <i
                          class="fa-brands fa-react"
                          style={{ fontSize: "25px", color: "#0FDEE8" }}
                        ></i>
                      </li>
                    </ul>
                  </div>
                  <div class="buttons">
                    <a class="button ghost" href="#">
                      <i class="fa-regular fa-eye"></i>Demo
                    </a>
                    <a href="#" class="button outline dark">
                      <i class="fa-brands fa-github"></i>View Code
                    </a>
                  </div>
                </div>
                {/* <div class="project">
                  <img src="/img/placeholder.png" alt="" />
                  <div class="title">Project Tilte</div>
                  <p class="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div class="tech">
                    <span> Tech Used:</span>
                    <ul>
                      <li>
                        <img src="././icons/html.png" />
                      </li>
                      <li>
                        <img src="././icons/css.png" />
                      </li>
                      <li>
                        <img src="././icons/react.png" />
                      </li>
                      <li>
                        <img src="././icons/redux.png" />
                      </li>
                    </ul>
                  </div>
                  <div class="buttons">
                    <a class="button ghost" href="#">
                      <i class="fa-regular fa-eye"></i>Demo
                    </a>
                    <a href="#" class="button outline dark">
                      <i class="fa-brands fa-github"></i>View Code
                    </a>
                  </div>
                </div> */}
                {/* <div class="project">
                  <img src="/img/placeholder.png" alt="" />
                  <div class="title">Project Tilte</div>
                  <p class="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div class="tech">
                    <span> Tech Used:</span>
                    <ul>
                      <li>
                        <img src="././icons/html.png" />
                      </li>
                      <li>
                        <img src="././icons/css.png" />
                      </li>
                      <li>
                        <img src="././icons/sass.png" />
                      </li>
                    </ul>
                  </div>
                  <div class="buttons">
                    <a class="button ghost" href="#">
                      <i class="fa-regular fa-eye"></i>Demo
                    </a>
                    <a href="#" class="button outline dark">
                      <i class="fa-brands fa-github"></i>View Code
                    </a>
                  </div>
                </div> */}
                {/* <div class="project">
                  <img src="/img/placeholder.png" alt="" />
                  <div class="title">Project Tilte</div>
                  <p class="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div class="tech">
                    <span> Tech Used:</span>
                    <ul>
                      <li>
                        <img src="././icons/html.png" />
                      </li>
                      <li>
                        <img src="././icons/css.png" />
                      </li>
                      <li>
                        <img src="././icons/js.png" />
                      </li>
                    </ul>
                  </div>
                  <div class="buttons">
                    <a class="button ghost" href="#">
                      <i class="fa-regular fa-eye"></i>Demo
                    </a>
                    <a href="#" class="button outline dark">
                      <i class="fa-brands fa-github"></i>View Code
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </div>
        <nav className="mobile-nav">
          <ul>
            <li onClick={scrollToAboutMe}>About</li>
            <li onClick={scrollToMySkill}>Skills</li>
            <li onClick={scrollToMyProjects}>Projects</li>
          </ul>
        </nav>
        {showUpButton && (
          <button className="arrowUp" onClick={handleUpButtonClick}>
            <KeyboardDoubleArrowUpIcon style={{ width: 30, height: 30 }} />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}
