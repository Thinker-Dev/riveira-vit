import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";

const slider1 = [
  {
    color: "#787878",
    src: "samanta.jpeg",
  },
  {
    color: "#787878",
    src: "Day1_1.webp",
  },
  {
    color: "#787878",
    src: "Day1_2.webp",
  },
  {
    color: "#787878",
    src: "Day2_1.webp",
  },
];

const slider2 = [
  {
    color: "#787878",
    src: "Day2_2.webp",
  },
  {
    color: "#787878",
    src: "Day3_1.webp",
  },
  {
    color: "#787878",
    src: "Day4_1.webp",
  },
  {
    color: "#787878",
    src: "Day4_2.webp",
  },
];

export default function SlidingImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image fill={true} alt={"image"} src={`/${project.src}`} />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image fill={true} alt={"image"} src={`/${project.src}`} />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
