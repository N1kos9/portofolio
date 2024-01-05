import React, { useRef, useEffect } from "react";
import "@/pages/styles/index.css";
import gsap from "gsap";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps }) => {
  // const router = useRouter();

  // const load = gsap.timeline({
  //   paused: "true",
  // });
  // let loader = useRef(null);
  // let progress = useRef(null);
  // let percent = useRef(null);
  // // let container = useRef(null)
  // let bar = useRef(null);
  // let barc = useRef(null);

  // useEffect(() => {
  //   load.to([percent, bar], {
  //     duration: 0.2,
  //     opacity: 0,
  //     zIndex: -1,
  //   });
  //   load.to(progress, {
  //     duration: 0.8,
  //     width: "0%",
  //   });
  //   load.to(
  //     loader,
  //     {
  //       // visibility: 'hidden',
  //       duration: 1.5,
  //       y: "-150%",
  //       // zIndex: -1
  //     },
  //     "-=.2"
  //   );
  //   load.to("container", {
  //     // visibility: 'visible',
  //     skewY: 10,
  //     opacity: 1,
  //     y: "10%",
  //     stagger: {
  //       amount: 0.4,
  //     },
  //   });
  // }, [percent, bar, progress, loader, barc, load]);

  // var id;
  // var width1 = 1;

  // function loading() {
  //   id = setInterval(frame, 20);
  // }
  // function frame() {
  //   if (width1 >= 100) {
  //     clearInterval(id);
  //     load.play();
  //   } else {
  //     width1++;
  //     if (typeof document !== "undefined") {
  //       document.getElementById("barc").style.width = width1 + "%";
  //       document.getElementById("percent").innerHTML = width1 + "%";
  //     }
  //   }
  // }

  loading();

  return (
    <>
      {/* <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <Component {...pageProps} />

          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>

      <div>
        <div className="loader" ref={(el) => (loader = el)}>
          <div className="progress" ref={(el) => (progress = el)}>
            <div id="percent" ref={(el) => (percent = el)}>
              1%
            </div>
            <div id="bar" ref={(el) => (bar = el)}>
              <div id="barc" ref={(el) => (barc = el)}></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default App;
