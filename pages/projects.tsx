import Page from "@/component/page";
import Styles from "@/pages/styles/projects.module.css";
import Link from "next/link";

function projects() {
  return (
    <>
      <Page />
      <main className={Styles.projects}>
        <div className={Styles.counting}>
          <p className={Styles.numbers}>
            <Link href="/">01</Link>
          </p>
          <p className={Styles.numbers}>
            <Link href="about">02</Link>
          </p>

          <p className={Styles.numbers}>
            <Link href="projects">03</Link>
          </p>
          <div className={Styles.line}></div>

          <p className={Styles.numbers}>
            <Link href="contact">04</Link>
          </p>
        </div>
        <h1>Some of my works</h1>
        <h3>Each of the project is unique piece of my development</h3>

        <div className={Styles.projectSection}>
          <div className={Styles.interContent}>
            <img src="./modern.png" alt="modern" />
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
            <img src="./seos.png" alt="seos" />
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
            <img src="./cryptoz.png" alt="cryptoz" />
            <div className={Styles.tehnoUsed}>
              <p>React</p>
              <p className={Styles.secondText}>Vite</p>
            </div>
            <div className={Styles.nameWork}>
              <h4>Blockchain landpage</h4>
            </div>
          </div>

          <div className={Styles.interContent}>
            <img src="./swipe.png" alt="swipe" />
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
