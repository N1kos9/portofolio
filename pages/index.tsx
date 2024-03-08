import Page from "@/component/page";
import styles from "@/pages/styles/index.module.css";
import Image from "next/image";
import RingImage from "@/public/ringg.webp";

function Home() {
  return (
    <>
      <Page>
        <main className={styles.background}>
          <h4>Ui+Ux, Dev, Animations</h4>
          <div className={styles.content}>
            <h1>Discover</h1>
            <h1>Innovate</h1>
            <h1>Transform</h1>
          </div>
          <div className={styles.footer}>
            © 2023 by Nikos. All rights reserved.
          </div>
        </main>
      </Page>
    </>
  );
}

export default Home;
