import { BsArrowRight } from "react-icons/bs";
import styles from "@/pages/styles/circular.module.css";
import Link from "next/link";
import Image from "next/image";
import Img from "@/public/about.png";

function circular() {
  return (
    <>
      <div className={styles.circularContainer}>
        <Link aria-label="anything" href="/about">
          <div className={styles.rotateText}>
            <Image
              src={Img}
              alt="round about text"
              className={styles.grant}
              layout="fixed"
            />
            <BsArrowRight href="#about" className={styles.arrow} />
          </div>
        </Link>
      </div>
    </>
  );
}

export default circular;
