import React from "react";
import "./Education.css";
import Footer from "../../Components/Footer/Footer";

export default function Education() {
  return (
    <div>
      <div className="container2">
        <div className="headerEducation">
          <h1>Education</h1>
        </div>
        <div className="education-item">
          <h3>Master of Science Computer Science and Software Engineering</h3>
          <p className="university">Constructor University</p>
          <p className="duration">Duration:Sep 2023 - Present</p>
          <p className="description">
            <p>Bremen, Germany</p>
            <p style={{ fontSize: "13px" }}>
              During my education, I've been completing several courses that
              will help me in my future career. These include Agile methodology,
              Architectural Strategy, Capstone Project (creating a project from
              scratch), and Machine Learning.
            </p>
          </p>
        </div>
        <div className="education-item">
          <h3>Master of Science MBA</h3>
          <p className="university">PNU University</p>
          <p className="duration">Duration: Jan 2019 - Dec 2021</p>
          <p className="description">Iran</p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Science Mechanical Engineering</h3>
          <p className="university">Shahid Bahonar University</p>
          <p className="duration">Duration: Sep 2013 - Mar 2018</p>
          <p className="description">Kerman, Iran</p>
        </div>
        <div className="education-item">
          <h3>High School Diploma Mathematics and Physics</h3>
          <p className="university">Booali High school</p>
          <p className="duration">Duration: Dec 2009 - Jun 2011</p>
          <p className="description">Kerman, Iran</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// import React from 'react'

// export default function Education() {
//   return (
//     <div>Education</div>
//   )
// }
