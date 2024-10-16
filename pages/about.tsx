import React from "react";
import Page from "@/component/page";
import aboutStyles from "@/pages/styles/about.module.css";
import Link from "next/link";

function About() {
  return (
    <>
      <Page>
        <main className={aboutStyles.about}>
          <div className={aboutStyles.aboutText}>
            <div className={aboutStyles.name}>
              <h1>
                Nikos
              </h1>
            </div>
            <div className={aboutStyles.sideText}>
              <div className={aboutStyles.skills}>
                <h1>Skills</h1>
                <p>Web Development</p>
                <p>System Integration</p>
                <p>User-Centric Design</p>
              </div>
              <div className={aboutStyles.thingsIUse}>
                <h1>Technologies</h1>
                <div className="react">
                  <p>1</p>
                  <h2>React.js</h2>
                  <h3>My go-to library for project development</h3>
                </div>
                <div className="three">
                  <p>2</p>
                  <h2>React Three Fiber / Spline</h2>
                  <h3>Powers the 3D aspects of my projects</h3>
                </div>
                <div className="framerMotion">
                  <p>3</p>
                  <h2>Framer Motion / GSAP</h2>
                  <h3>
                    My choice for implementing animations with ease and
                    efficiency.
                  </h3>
                </div>
                <div className="cssFrameworks">
                  <p>4</p>
                  <h2>CSS Frameworks</h2>
                  <h3>Tailwind, Sass/SCSS, Bootstrap</h3>
                </div>
                <div className="fundamentals">
                  <p>5</p>
                  <h2>Vanilla HTML, CSS, JS</h2>
                  <h3>Ideal for smaller projects</h3>
                </div>
              </div>
              <div className={aboutStyles.experience}>
                <h1>Experience</h1>
                <p>2021-2022</p>
                <h2>- Freelancing</h2>
                <h3>
                  Worked with several clients, consistently receiving positive
                  feedback.
                </h3>
                <p>2022-2023</p>
                <h2>- Upcareaus</h2>
                <h3>
                  Optimized the website for mobile responsiveness and user
                  experience.
                </h3>
              </div>
              <div className={aboutStyles.interests}>
                <h1>Interests</h1>
                <h3>Chess</h3>
                <h3>Psychology</h3>
                <h3>Reading</h3>
                <h3>Playing Piano</h3>
              </div>
            </div>
          </div>
        </main>
      </Page>
    </>
  );
}

export default About;
