import Link from "next/link";
import "@/component/navbar.css";
import { useState } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <div className="navbar">
            <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
              <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                <span
                  className={navOpen ? "lineBottom spin" : "lineBottom"}
                ></span>
              </div>
            </div>
          </div>
          <div
            className="nav-overlay"
            style={{
              top: navOpen ? "0" : "-100%",
              transitionDelay: navOpen ? "0s" : "0s",
            }}
          >
            <ul className="nav-links">
              <li className="nav-item">
                <Link
                  href="/"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.8s" : "0s",
                    opacity: navOpen ? "1" : "0",
                  }}
                >
                  Home
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.9s" : "0s",
                    opacity: navOpen ? "1" : "0",
                  }}
                >
                  About
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <Link
                  href="/projects"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "1.1s" : "0s",
                    opacity: navOpen ? "1" : "0",
                  }}
                >
                  Projects
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "1.2s" : "0s",
                    opacity: navOpen ? "1" : "0",
                  }}
                >
                  Contact
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
            </ul>
            <div className="nav-footer">
              <div
                className="location"
                style={{
                  bottom: navOpen ? "0" : "-20px",
                  opacity: navOpen ? "1" : "0",
                  transitionDelay: navOpen ? "1.3s" : "0s",
                }}
              >
                <span>Romania</span>
              </div>
              <div className="nav-social-media">
                <ul>
                  <li>
                    <a
                      href="https://github.com/N1kos9"
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1.4s" : "0s",
                      }}
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in"
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1.5s" : "0s",
                      }}
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
