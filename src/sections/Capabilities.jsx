// src/sections/Capabilities.jsx

import React from 'react';
import Card from '../components/Card';
import styles from './Capabilities.module.css';

const defaultCapabilities = [
  {
    icon: '⚡',
    title: 'AI-Powered Autonomy',
    description:
      'Leveraging proprietary machine learning for complex route planning, intelligent object tracking, and real-time decision-making.',
  },
  {
    icon: '🛡️',
    title: 'Hardened Platforms',
    description:
      'Military-grade construction, engineered to withstand extreme temperatures, harsh weather, and high electromagnetic interference.',
  },
  {
    icon: '🛰️',
    title: 'Unrivaled Range & Endurance',
    description:
      'Extended flight endurance and secure, encrypted long-range data links ensure continuous operational coverage.',
  },
  {
    icon: '🔬',
    title: 'Payload Versatility',
    description:
      'Modular design enables rapid integration of diverse sensor packages, including ISR, LiDAR, and specialized mission systems.',
  },
];

const Capabilities = ({ capabilities = defaultCapabilities }) => {
  return (
    <section id="capabilities" className={styles.section}>
      <div className={styles.container}>

        {/* Section Header */}
        <div className={`${styles.header} fadeIn`}>
          <h2 className={styles.subTitle}>Our Technology</h2>
          <h3 className={styles.mainTitle}>Precision Engineered for Performance.</h3>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {capabilities.map((item, index) => (
           <Card
  key={index}
  icon={item.icon}
  title={item.title}
  description={item.description}
  style={{ animationDelay: `${0.15 * index + 0.3}s` }}
/>

          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;
