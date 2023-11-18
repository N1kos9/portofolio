import { BsArrowRight } from "react-icons/bs";
// import circle from '@/public/circle-star.svg'
import styles from "@/pages/styles/circular.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function circular() {
  return (
    <>
      <div className={styles.circularContainer}>
        <Link aria-label="anything" href="/about">
          <div className={styles.rotateText}>
            <img src="./about.png" alt="" className={styles.grant} />
            <BsArrowRight href="#about" className={styles.arrow} />
          </div>
        </Link>
      </div>
    </>
  );
}

export default circular;
