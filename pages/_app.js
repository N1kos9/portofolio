import React, { useRef, useEffect, useState } from "react";
import "@/pages/styles/index.css";
import { gsap, Expo } from "gsap";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/loader.module.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) => {
        if (counter < 100) {
          return counter + 1;
        } else {
          clearInterval(count);
          reveal();
          return 100;
        }
      });
    }, 25);
    return () => clearInterval(count);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });

    t1.to("." + styles.follow, {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to("." + styles.hide, { opacity: 0, duration: 0.3 })
      .to("." + styles.hide, { display: "none", duration: 0.3 })
      .to("." + styles.follow, {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      });

    const words = document.querySelectorAll(
      "." + styles.welcomeText.split(" ")
    );
    words.forEach((word, index) => {
      t1.to(word, {
        opacity: 1,
        duration: 0.5,
        delay: index * 0.5,
      });
    });

    t1.to("." + styles.loading, {
      background: "transparent",
      duration: 0,
    })
      .to("." + styles.follow, {
        x: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
      })
      .to("." + styles.follow, { display: "none", duration: 0 })
      .to("." + styles.loading, {
        display: "none",
        duration: 0,
      });
    t1.to("." + styles.appContainer, {
      display: "none",
    });
  };
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <Component {...pageProps} />

          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="loader-container">
              <svg className="loader-svg" viewBox="0 0 100 100">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#333", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#000", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="loader-container">
              <svg className="loader-svg" viewBox="0 0 100 100">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#333", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#000", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div>
        <div className={styles.appContainer}>
          <div className={styles.loading}>
            <div className={styles.follow}>
              <h1 className={styles.welcomeText}>Welcome to My Portfolio</h1>
            </div>
            <div
              className={`${styles.hide} ${styles.progressBar}`}
              style={{ width: counter + "%" }}
            ></div>
            <p className={`${styles.hide} ${styles.count}`}>{counter}%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
