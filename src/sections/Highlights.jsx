import React from 'react';
import styles from './Highlights.module.css';

// Default feature list (replaceable by CMS)
const defaultFeatures = [
  {
    icon: '✅',
    title: 'Zero-Fail Redundancy',
    description:
      'Multiple system backups and real-time diagnostics ensure flight integrity even under critical subsystem failure.',
  },
  {
    icon: '🔒',
    title: 'Encrypted Data Link',
    description:
      'Secure, quantum-resistant command and control links prevent interception and guarantee uncompromised data integrity.',
  },
  {
    icon: '⏱️',
    title: 'Rapid Deployment System',
    description:
      'Minimal pre-flight setup time allows platforms to be mission-ready and airborne in less than two minutes across diverse terrains.',
  },
];

const Highlights = ({ features = defaultFeatures }) => {
  return (
    <section id="highlights" className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={`${styles.header} fadeIn`}>
          <h2 className={styles.subTitle}>Key Advantages</h2>
          <h3 className={styles.mainTitle}>Engineered for Absolute Trust.</h3>
        </div>

        {/* Feature Grid */}
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureItem} fadeInStagger`}
              style={{ animationDelay: `${0.15 * index + 0.3}s` }}
            >
              <div className={styles.iconWrapper}>{feature.icon}</div>

              <h4 className={styles.title}>{feature.title}</h4>

              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Highlights;
