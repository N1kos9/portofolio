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
        <div className={Styles.work}>
          <div className={Styles.firstElem}>
            <Image src={ImgOne} alt="Introductive page" />
            <div>
              <h2>Introductive page</h2>
              <p>Modern landing page </p>
              <h4>
                React, Vite, Tailwind, <br /> Framer Motion
              </h4>
              <div className={Styles.files}>
                <a
                  href="https://github.com/N1kos9/landing-page"
                  target="_blank"
                >
                  <span>
                    Code <AiFillGithub className={Styles.icon} />
                  </span>
                </a>
                <a
                  href="https://landing-page-mocha-tau.vercel.app/"
                  target="_blank"
                >
                  <span>
                    Demo <MdOpenInBrowser className={Styles.icon} />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={Styles.secondElem}>
            <div>
              <h2>Seos</h2>
              <p>Services place</p>
              <h4>React, Vite, Aos</h4>
              <div className={Styles.files}>
                <a href="https://github.com/N1kos9/Seos" target="_blank">
                  <span>
                    Code <AiFillGithub className={Styles.icon} />
                  </span>
                </a>
                <a
                  href="https://seos-one.vercel.app/?vercelToolbarCode=WUYzfN84k-6cw1Q"
                  target="_blank"
                >
                  <span>
                    Demo <MdOpenInBrowser className={Styles.icon} />
                  </span>
                </a>
              </div>
            </div>
            <Image src={ImgTwo} alt="Seos" />
          </div>
          <div className={Styles.thirdElem}>
            <Image src={ImgThree} alt="Cryptoz" />
            <div>
              <h2>Cryptoz</h2>
              <p>Crypto landing page</p>
              <h4>React, Vite</h4>
              <div className={Styles.files}>
                <a href="https://github.com/N1kos9/CryptoToz" target="_blank">
                  <span>
                    Code <AiFillGithub className={Styles.icon} />
                  </span>
                </a>
                <a href="https://crypto-toz.vercel.app/" target="_blank">
                  <span>
                    Demo <MdOpenInBrowser className={Styles.icon} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default projects;
