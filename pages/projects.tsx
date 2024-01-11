import Page from "@/component/page";
import Styles from "@/pages/styles/projects.module.css";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

Image;
function projects() {
  return (
    <>
      <Page />
      <main className={Styles.projects}>
        <h1>Some of my works</h1>
        <h3>Each of the project is unique piece of my development</h3>

        <div className={Styles.projectSection}>
          <div className={Styles.interContent}>
            <div className={Styles.image}>
              <Image src="/modern.png" width={700} height={700} alt="modern" />
              <div className={Styles.content}>
                <a
                  href="https://landing-page-mocha-tau.vercel.app/"
                  target="_blank"
                >
                  <CgWebsite />
                  Demo
                </a>
                <a
                  href="https://github.com/N1kos9/landing-page"
                  target="_blank"
                  className={Styles.secondLink}
                >
                  <FaCode />
                  Code
                </a>
              </div>
            </div>
            <div className={Styles.tehnoUsed}>
              <p>React</p>
              <p className={Styles.secondText}>Tailwind</p>
              <p>Vite</p>
              <p>Framer motion</p>
            </div>
            <div className={Styles.nameWork}>
              <h4>Detailed description of myself</h4>
            </div>
          </div>

          <div className={Styles.interContent}>
            <div className={Styles.image}>
              <Image src="/seos.png" width={700} height={700} alt="seos" />
              <div className={Styles.content}>
                <a
                  href="https://landing-page-mocha-tau.vercel.app/"
                  target="_blank"
                >
                  <CgWebsite />
                  Demo
                </a>
                <a
                  href="https://github.com/N1kos9/landing-page"
                  target="_blank"
                  className={Styles.secondLink}
                >
                  <FaCode />
                  Code
                </a>
              </div>
            </div>
            <div className={Styles.tehnoUsed}>
              <p>React</p>
              <p className={Styles.secondText}>Vite</p>
              <p>Aos</p>
            </div>
            <div className={Styles.nameWork}>
              <h4>Multi service place</h4>
            </div>
          </div>

          <div className={Styles.interContent}>
            <div className={Styles.image}>
              <Image
                src="/cryptoz.png"
                width={700}
                height={700}
                alt="cryptoz"
              />
              <div className={Styles.content}>
                <a
                  href="https://landing-page-mocha-tau.vercel.app/"
                  target="_blank"
                >
                  <CgWebsite />
                  Demo
                </a>
                <a
                  href="https://github.com/N1kos9/landing-page"
                  target="_blank"
                  className={Styles.secondLink}
                >
                  <FaCode />
                  Code
                </a>
              </div>
            </div>
            <div className={Styles.tehnoUsed}>
              <p>React</p>
              <p className={Styles.secondText}>Vite</p>
            </div>
            <div className={Styles.nameWork}>
              <h4>Blockchain landpage</h4>
            </div>
          </div>

          <div className={Styles.interContent}>
            <Image src="/swipe.png" width={700} height={700} alt="swipe" />
            <div className={Styles.tehnoUsed}>
              <p>React</p>
              <p className={Styles.secondText}>Tailwind</p>
              <p>NextJS</p>
            </div>
            <div className={Styles.nameWork}>
              <h4>One page, classified as Swipe</h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default projects;
