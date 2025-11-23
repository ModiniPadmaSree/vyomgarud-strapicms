// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- Added
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        
        <div className={styles.logo}>
          VYOMGARUD
        </div>

        {/* Right side links */}
        <div className={styles.links}>
          {/* New Blog link */}
          <Link to="/blog" className={styles.contactLink}>
            Blog
          </Link>

          {/* Existing contact button */}
          <a href="#contact" className={styles.contactLink}>
            Contact Us
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
