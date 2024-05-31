import React from "react";
import "./Experience.css";
import Footer from "../../Components/Footer/Footer";

export default function Experience() {
  return (
    <div>
      <main className="main">
        <header className="header2">
          <h1 className="h1Name">My Experiences</h1>
        </header>
        <holder>
          <section className="about">
            <div className="workDetail">
              <h6>Apr 2024 </h6>
              <div className="datail">
                <h3>
                  Neighboarhood Connect Application using Tailwind, Css and
                  React JS | Constructor University Bremen
                </h3>
                <ul className="content">
                  <li>
                    Implemented 4 critical pages: login, sign-up, chat, and
                    incident reporting, integrating API calls for data handling.
                  </li>
                  <li>
                    learned teamwork, finding solutions for arising challenges
                    while thinking productively.
                  </li>
                  <li>
                    Cooperated with other teams (Backend, Security, CEO, and
                    Database Management) to ensure smooth API interactions.
                  </li>
                  <li>
                    Found a great achievement by taking advantage of Agile and
                    code review sessions to share experiences and deal with code
                    issues.
                  </li>
                  <li>
                    I showed leadership in the team, especially when motivation
                    was low, by sharing our project with university professors
                    in sprint reviews. This helped us get feedback and stay
                    focused.
                  </li>
                  <li>
                    Deployed eye-catching, responsive designs for incidents and
                    offers, resulting in a 50% reduction in bounce rates and a
                    15% increase in user interaction. Used APIs to fetch and
                    display data dynamically.
                  </li>
                </ul>
              </div>
            </div>
            <div className="workDetail">
              <h6>Mar 2024 </h6>
              <div className="datail">
                <h3>
                  Personal Portfolio using Tailwind, CSS, MUI, and React.js
                </h3>
                <ul className="content">
                  <li>
                    Established a component-based architecture, showing
                    initiative and forward-thinking, which created reusable code
                    components and reduced development time by about 20% for
                    future projects.
                  </li>
                  <li>
                    Set up Single Page Application (SPA) integration to update
                    content without reloading, making pages load 30% faster.
                  </li>
                  <li>
                    completely responsive website with different styles for
                    different screen sizes.
                  </li>
                </ul>
              </div>
            </div>
            <div className="workDetail">
              <div className="detail2">
                <h5 className="last-title" style={{fontSize:'15px'}} >Personal Projects</h5>
                <h7>Sep 2023 </h7>
              </div>
              <div className="detail3">
                <div className="datail">
                  <h3 className="online-title">
                    Dashboard Development using Material-UI and React.js
                  </h3>
                  <ul className="content online-content">
                    <li>
                      Took the lead in designing a visually appealing and
                      user-friendly dashboard for admins, resulting in a 35%
                      increase in efficiency for data tasks.
                    </li>
                    <li>
                      Enhanced user authentication by designing a friendly login
                      form, making the process 20% smoother for users.
                    </li>
                  </ul>
                </div>

                <div className="datail">
                  <h3>
                    Ticket Website Development using Tailwind CSS and React.js
                  </h3>
                  <ul className="content">
                    <li>
                      irected the creation of a simpler ticket-buying system,
                      reducing checkout time by 30% and enhancing user
                      experience. This resulted in increased transactions and
                      enhanced customer loyalty.
                    </li>
                    <li>
                      Implemented interactive features like real-time updates on
                      ticket availability, using React.js, Leading to a 25%
                      surge in user engagement.
                    </li>
                  </ul>
                </div>

                <div className="datail">
                  <h3>
                    Login Form Development using Tailwind CSS and React.js:
                  </h3>
                  <ul className="content">
                    <li>
                      optimized the login experience with a user-friendly
                      authentication form, reducing login errors by 40% and
                      enhancing user satisfaction and security across the
                      platform.
                    </li>
                    <li>
                      Gained a deeper understanding of UI/UX principles and
                      improved skills in front-end development tools, leading to
                      a 30% increase in design efficiency.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="workDetail">
              <div className="detail2">
                <h5 className="last-title" style={{fontSize:'15px'}}>Business Projects</h5>
                <h7> Sep 2021 - Dec 2022 </h7>
              </div>
              <div className="detail3">
                <div className="datail">
                  <h3 className="online-title">
                    Sales Management and Advisory Roles | Impex Company, Dubai
                  </h3>
                  <ul className="content online-content">
                    <li>
                      Specialized in promoting and selling Caviar in a
                      competitive market, showing initiative and persistence by
                      securing contracts with five luxury hotels within four
                      months.
                    </li>
                    <li>
                      Demonstrated directed succeed in challenging business
                      situations through smart sales planning and execution. Led
                      the team with energy and clear guidance, leading to a 20%
                      boost in sales.
                    </li>
                    <li>
                      Guided expert guidance to sales teams by following the
                      successful Company policy, resulting in a 15% improvement
                      in overall sales performance.
                    </li>
                  </ul>
                </div>

                <div className="datail">
                  <h3>Sales Executive | IKCO, Iran</h3>
                  <ul className="content">
                    <li>
                      Achieved better sales rate in the market through
                      innovative marketing strategies, including.
                    </li>
                    <li>
                      Improved website and increased social media activity,
                      leading to a 10% revenue boost. Implemented strategic
                      initiatives, resulting in a 17% growth in sales revenue.
                    </li>
                    <li>
                      Advised team to make successful marketing campaigns.
                      Showed leadership by organizing tasks and encouraging
                      teamwork, resulting in a 25% increase in campaign success.
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
