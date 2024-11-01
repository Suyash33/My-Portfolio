import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          // src={getImageUrl("about/aboutImage.png")}
          src={getImageUrl("about/work.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Experienced in creating responsive and optimized interfaces using React.js, HTML, CSS, and JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Proficient in developing fast and secure backend systems with Node.js and Express.js supporting efficient data management and high-volume queries.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/aiupdated.png")} alt="AI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Enthusiast</h3>
              <p>Skilled in building AI-based applications, with experience in image processing, data analysis, and machine learning solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
