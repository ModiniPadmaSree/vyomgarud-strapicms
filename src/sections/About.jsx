import React from 'react';
import styles from './About.module.css';

// Default mission stats (can be replaced by CMS later)
const defaultStats = [
  { number: '99.99%', label: 'Mission Reliability' },
  { number: '1.2M+', label: 'Autonomous Flight Hours' },
  { number: '450km+', label: 'Extended Range Capacity' },
];

const About = ({
  stats = defaultStats,
  heading = "Our Foundation",
  title = "We deliver the tactical edge in the most unforgiving domains.",
  description = `VyomGarud stands at the forefront of military-grade UAV technology, delivering autonomous systems engineered for uncompromising reliability. 
  Our mission is to provide tactical superiority through precision-designed hardware, AI-powered flight control, and encrypted command infrastructure. 
  We empower defense and security forces with unmatched endurance and intelligence for the most critical global operations.
  Every system we deploy is a testament to precision and trust.`,
}) => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.contentGrid}>

          {/* Column 1 — Mission Stats */}
          <div className={`${styles.statsColumn} fadeInDelayed`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${styles.statBlock} fadeInStagger`}
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Column 2 — Mission Statement */}
          <div className={`${styles.missionColumn} fadeIn`}>
            <h2 className={styles.subTitle}>{heading}</h2>
            <h3 className={styles.mainTitle}>{title}</h3>

            <p className={styles.summary}>
              {description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
