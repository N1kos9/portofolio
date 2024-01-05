import Page from "@/component/page";
import Styles from "@/pages/styles/projects.module.css";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { MdOpenInBrowser } from "react-icons/md";

import Image from "next/image";
import ImgOne from "@/public/modern.png";
import ImgTwo from "@/public/seos.png";
import ImgThree from "@/public/cryptoz.png";

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
            <Link href="/about">02</Link>
          </p>

          <p className={Styles.numbers}>
            <Link href="/projects">03</Link>
          </p>
          <div className={Styles.line}></div>

          <p className={Styles.numbers}>
            <Link href="/contact">04</Link>
          </p>
        </div>
        <h1>Some of my works</h1>
        <h3>Each of the project is unique piece of my development</h3>

        <div className={Styles.projectSection}>
          <div className={Styles.interContent}>
            <img src="./modern.png" alt="" />
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
            <img src="./seos.png" alt="" />
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
            <img src="./cryptoz.png" alt="" />
            <div className={Styles.tehnoUsed}>
              <p>React</p>
              <p className={Styles.secondText}>Vite</p>
            </div>
            <div className={Styles.nameWork}>
              <h4>Blockchain landpage</h4>
            </div>
          </div>

          <div className={Styles.interContent}>
            <img src="./modern.png" alt="" />
            <div className={Styles.tehnoUsed}>
              <p>React</p>
              <p className={Styles.secondText}>Tailwind</p>
            </div>
            <div className={Styles.nameWork}>
              <h4>Description of Nikos</h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default projects;
