import React from 'react';
import Button from '../components/Button';
import styles from './Hero.module.css';

const Hero = ({
  companyName = "VYOMGARUD",
  tagline = "Autonomous Systems. Unmatched Reliability.",
  supportingText = "Precision engineered for mission-critical operations and aerial dominance.",
  ctaText = "Request a Technical Brief",
  videoSrc = "/drone.mp4",
  fallbackImage = "/drone-fallback.jpg"
}) => {
  const taglineParts = tagline.split('.').filter(Boolean);

  return (
    <section className={styles.hero}>

      {/* Background Video */}
      <video
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={fallbackImage}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.contentWrapper}>
        
        <h1 className={styles.companyName}>{companyName}</h1>

        <p className={styles.tagline}>
          {taglineParts.map((part, index) => (
            <span 
              key={index} 
              className={index === 0 ? "" : styles.subtitleLine}
            >
              {part.trim()}.
            </span>
          ))}
        </p>

        <p className={styles.supportingText}>{supportingText}</p>

        <Button text={ctaText} />
      </div>
    </section>
  );
};

export default Hero;
