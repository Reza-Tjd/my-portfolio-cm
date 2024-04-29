import React from "react";
import "./Experience.css";
import Footer from "../../Components/Footer/Footer";

export default function Experience() {
  return (
    <div>
      <main className="main">
        <header className="header2" >
          <h1 className="h1Name">My Experiences</h1>
        </header>
        <holder>
          <section className="about">
            <div className="workDetail">
              <h6>Mar 2019 - Aug 2021</h6>
              <div className="datail">
                <h3>Sales Executive | IKCO, Iran</h3>
                <ul className="content">
                  <li>
                    Achieved record-breaking sales in the automotive retail
                    sector through innovative marketing strategies, including
                    website optimization and increased social media presence.
                  </li>
                  <li>
                    Implemented strategic initiatives resulting in 17% growth in
                    sales revenue.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to develop and
                    execute successful marketing campaigns.
                  </li>
                </ul>
              </div>
            </div>
            <div className="workDetail">
              <h6>Sep 2021 - Dec 2022</h6>
              <div className="datail">
                <h3>
                  Sales Management and Advisory Roles | Impex Company, Dubai
                </h3>
                <ul className="content">
                  <li>
                    Specialized in promoting and selling Caviar in a competitive
                    market, securing contracts with five luxury hotels within
                    four months.
                  </li>
                  <li>
                    Demonstrated ability to thrive in challenging business
                    environments through strategic sales planning and execution.
                  </li>
                  <li>
                    Provided expert guidance to sales teams, resulting in
                    [mention specific metric] improvement in overall sales
                    performance.
                  </li>
                </ul>
              </div>
            </div>
            <div className="workDetail">
              <div className="detail2">
                <h5>Online Projects</h5>
                <h6>Mar 2019 - Aug 2021</h6>
              </div>
              <div className="detail3">
                <div className="datail">
                  <h3>
                    Login Form Development using Tailwind CSS and React.js
                  </h3>
                  <ul className="content">
                    <li>
                      Streamlined user authentication process by designing and
                      developing an intuitive and visually captivating login
                      form.
                    </li>
                    <li>
                      Deepened understanding of UI/UX principles and enhanced
                      proficiency in front-end development tools.
                    </li>
                  </ul>
                </div>

                <div className="datail">
                  <h3>Dashboard Development using Material-UI and React.js</h3>
                  <ul className="content">
                    <li>
                      Crafted an aesthetically pleasing and highly functional
                      dashboard interface catering to admin needs for data
                      visualization and management.
                    </li>
                    <li>
                      Strengthened expertise in React.js through dynamic data
                      rendering and proactive troubleshooting during
                      development.
                    </li>
                  </ul>
                </div>

                <div className="datail">
                  <h3>
                    Ticket Website Development using Tailwind CSS and React.js
                  </h3>
                  <ul className="content">
                    <li>
                      Established a user-friendly ticket purchasing platform to
                      enhance the overall user experience.
                    </li>
                    <li>
                      Implemented dynamic features, including real-time updates
                      on ticket availability, utilizing React.js.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </holder>
      </main>
      <Footer />
    </div>
  );
}
