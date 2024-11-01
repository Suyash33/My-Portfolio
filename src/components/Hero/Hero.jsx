import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Suyash</h1>
        <p className={styles.description}>I'm a full-stack developer skilled in modern web and AI solutions. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:suyashbudhe1@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        // src={getImageUrl("hero/heroImage.png")}
        src={getImageUrl("hero/finalimg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
