import Page from "@/component/page";
import Circular from "./items/circular";
import styles from "@/pages/styles/index.module.css";
import Link from "next/link";
import Image from "next/image";
import RingImage from "@/public/ring.webp";

function Home() {
  return (
    <>
      <main className={styles.background}>
        <Page />
        <div className={styles.texty}>
          <h1 className={styles.bigText}>
            My name is worthless <br />
            <span> Unless I bring something valuable</span>
            <div className={styles.ring}>
              <Image
                className={styles.imgRingOne}
                src={RingImage}
                alt="ring image one"
              />
            </div>
            <div className={styles.ring}>
              <Image
                className={styles.imgRingTwo}
                src={RingImage}
                alt="ring image two"
              />
            </div>
          </h1>
          <h3 className={styles.mistery}>
            Find out what valuable assets I can bring
          </h3>
        </div>
        <Circular />
        <div className={styles.counting}>
          <p className={styles.numbers}>
            <Link href="" prefetch={false}>
              01
            </Link>
          </p>
          <div className={styles.line}></div>
          <p className={styles.numbers}>
            <Link href="about" prefetch={false}>
              02
            </Link>
          </p>
          <p className={styles.numbers}>
            <Link href="projects" prefetch={false}>
              03
            </Link>
          </p>
          <p className={styles.numbers}>
            <Link href="contact" prefetch={false}>
              04
            </Link>
          </p>
        </div>

        <div className={styles.copyright}>
          © 2023 by Nikos. All rights reserved.
        </div>
      </main>
    </>
  );
}

export default Home;
