import React from "react";
import Page from "@/component/page";
import aboutStyles from "@/pages/styles/about.module.css";
import Link from "next/link";

function About() {
  return (
    <>
      <main className={aboutStyles.about}>
        <Page />

        <div className={aboutStyles.aboutText}>
          <div className={aboutStyles.name}>
            <h1>
              Murariu <br /> Nikos
            </h1>
          </div>
          <div className={aboutStyles.sideText}>
            <div className={aboutStyles.skills}>
              <h1>Skills</h1>
              <p>Web development</p>
              <p>Integration</p>
              <p>Simplicity</p>
            </div>
            <div className={aboutStyles.thingsIUse}>
              <h1>Technology I use</h1>
              <div className="react">
                <p>1</p>
                <h2>react.js</h2>
                <h3>
                  Use it for most of my projects, accesible, and divides huge
                  components into smaller pieces
                </h3>
              </div>
              <div className="three">
                <p>2</p>
                <h2>react-three-fiber/spline</h2>
                <h3>
                  Use it for most of the 3d part, great functionality and easy
                  to understand
                </h3>
              </div>
              <div className="framerMotion">
                <p>3</p>
                <h2>framer motion</h2>
                <h3>I use it whenever I have some animation to make</h3>
              </div>
              <div className="cssFrameworks">
                <p>4</p>
                <h2>css frameworks</h2>
                <h3>Tailwind, Sass/Scss, Bootstrap</h3>
              </div>
              <div className="fundamentals">
                <p>5</p>
                <h2>vanilla html-css-js</h2>
                <h3>
                  Using it whenever there is a small project, and to get
                  nostalgia
                </h3>
              </div>
            </div>
            <div className={aboutStyles.experience}>
              <h1>Experience</h1>
              <p>2021-2022</p>
              <h2>- Freelancing</h2>
              <h3>Had a few clients, all of them were positive</h3>
              <p>2022-2023</p>
              <h2>- Upcareaus</h2>
              <h3>My job was to make the website mobile friendly</h3>
            </div>
            <div className={aboutStyles.interests}>
              <h1>Interests</h1>
              <h3>Chess</h3>
              <h3>Psychology</h3>
              <h3>Reading</h3>
              <h3>Piano</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
