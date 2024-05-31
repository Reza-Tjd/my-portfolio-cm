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
          <p className="duration">Duration:Sep 2023 - Jul 2025</p>
          <p className="description">
            <p>Bremen, Germany</p>
            <p style={{ fontSize: "13px" }}>
            During the education, relevant courses such as Agile Methodology, Architectural Strategy, Capstone Project (creating a project from scratch), and Machine Learning have been undertaken.
            </p>
          </p>
        </div>
        <div className="education-item">
          <h3>Master of Science MBA</h3>
          <p className="university">PNU University</p>
          <p className="duration">Duration: Jan 2019 - Dec 2021</p>
          <p className="description">
            <p>Iran</p>
            <p style={{ fontSize: "13px" }}>
            Completed a Master's in Business Administration with a focus on marketing. Studied topics such as business management, marketing strategies, financial management, and team leadership. This education provided knowledge to operate businesses and tackle challenges.
            </p>
          </p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Science Mechanical Engineering</h3>
          <p className="university">Shahid Bahonar University</p>
          <p className="duration">Duration: Sep 2013 - Mar 2018</p>
          <p className="description">
            <p>Kerman, Iran</p>
            <p style={{ fontSize: "13px" }}>
            Completed the Bachelor of Mechanical Engineering, enhancing troubleshooting skills and concluding with a practical thesis on designing a machine capable of reaching speeds up to 9000 rpm.
            </p>
          </p>
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
