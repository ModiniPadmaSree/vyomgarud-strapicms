import React from 'react';
import Button from '../components/Button';
import styles from './ContactFooter.module.css';

// Default social links (can be replaced with Strapi later)
const defaultSocial = [
  { name: 'X', icon: '🐦', href: '#x' },
  { name: 'LinkedIn', icon: '💼', href: '#linkedin' },
  { name: 'GitHub', icon: '💻', href: '#github' },
];

const ContactFooter = ({
  social = defaultSocial,

  footerTagline = "Precision Engineering. Tactical Superiority.",
  ctaTitle = "Secure Your Future.",
  ctaText = "Ready to integrate unmatched autonomy? Contact our advanced systems team for a detailed, classified technical brief.",
  
  formHeader = "Request Brief",
  inputNamePlaceholder = "Name / Organization",
  inputEmailPlaceholder = "Email Address",
  submitText = "Submit Inquiry",

}) => {
  return (
    <footer id="contact" className={`${styles.footer} fadeIn`}>
      <div className={styles.container}>

        {/* CONTACT SECTION */}
        <div className={styles.contactArea}>

          {/* CTA TEXT */}
          <div className={`${styles.ctaBox} fadeInStagger`}>
            <h3 className={styles.ctaTitle}>{ctaTitle}</h3>
            <p className={styles.ctaText}>{ctaText}</p>
          </div>

          {/* CONTACT FORM */}
          <div className={`${styles.formContainer} fadeInStagger`} style={{ animationDelay: "0.3s" }}>
            <div className={styles.formHeader}>{formHeader}</div>

            <form className={styles.contactForm}>
              <input
                type="text"
                placeholder={inputNamePlaceholder}
                className={styles.formInput}
                required
              />

              <input
                type="email"
                placeholder={inputEmailPlaceholder}
                className={styles.formInput}
                required
              />

              <Button text={submitText} type="submit" />
            </form>
          </div>

        </div>

        {/* FOOTER GRID */}
        <div className={styles.footerGrid}>

          <div className="fadeInStagger">
            <div className={styles.logoFooter}>VYOMGARUD</div>
            <p className={styles.ctaText} style={{ fontSize: '0.9rem' }}>
              {footerTagline}
            </p>
          </div>

          <div className="fadeInStagger" style={{ animationDelay: "0.15s" }}>
            <h4 className={styles.heading}>Technology</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="#capabilities">AI Autonomy</a></li>
              <li className={styles.linkItem}><a href="#capabilities">Hardened Systems</a></li>
              <li className={styles.linkItem}><a href="#highlights">Zero-Fail Redundancy</a></li>
            </ul>
          </div>

          <div className="fadeInStagger" style={{ animationDelay: "0.3s" }}>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="#about">About Us</a></li>
              <li className={styles.linkItem}><a href="#contact">Careers</a></li>
              <li className={styles.linkItem}><a href="#contact">Media Inquiries</a></li>
            </ul>
          </div>

          <div className="fadeInStagger" style={{ animationDelay: "0.45s" }}>
            <h4 className={styles.heading}>Connect</h4>
            <div className={styles.socialIcons}>
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className={styles.linkItem}
                  title={s.name}
                  aria-label={`Visit our ${s.name}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="fadeIn" style={{ animationDelay: "0.5s" }}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} VyomGarud Systems. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactFooter;
