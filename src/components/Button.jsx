// src/components/Button.jsx
import React from 'react';
import styles from './Button.module.css'; // <-- Import the styles

const Button = ({ text }) => {
  return (
    <button className={styles.button}> {/* Apply the scoped class */}
      {text}
    </button>
  );
};

export default Button;