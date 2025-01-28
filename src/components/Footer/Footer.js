import React from 'react';
import styles from './Footer.module.css';
import LogoWhite from '../../images/Logo.png';


const navItems = [
  { label: 'OFFERING', path: '/offerings' },
  { label: 'WORK', path: '/work' },
  { label: 'CULTURE', path: '/culture' },
  { label: 'IMPRESSION', path: '/impression' },
  { label: 'SPOTLIGHT', path: '/spotlight', isActive: true },
  { label: 'CONNECT', path: '/connect' }
];

const socialLinks = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/4fbdf1cc2a2f073bd0c5fe6a6efdc90e15b0e3ddc6dd8375a8c2f2e64dc3c4ea?apiKey=8397598769884750a970fb52fe91672d&', href: '#', alt: 'Facebook' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/2498464957ce1d4a612992839e2a4fe509d2c721c1572ad87b695989eaa311ba?apiKey=8397598769884750a970fb52fe91672d&', href: '#', alt: 'Twitter' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/cc0d23f7f9f0b2d2366a35a37b12545f00051df60d61c3885fee5dd983a484c0?apiKey=8397598769884750a970fb52fe91672d&', href: '#', alt: 'Instagram' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/0d1262f64fd3b4a525698ba256c747343e60febb921a84ad75fb0118bc149c00?apiKey=8397598769884750a970fb52fe91672d&', href: '#', alt: 'LinkedIn' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/dae71c324620f142152a14057203ec18f9629cc1876b62b2d2dc724ccff28226?apiKey=8397598769884750a970fb52fe91672d&', href: '#', alt: 'YouTube' }
];

export default function Footer() {
  return (
    
    <footer className={styles.footerContainer}>
        
      <div className={styles.footerContent}>
      {/* <div className={styles.logoContainer}>
      <img 
        src={LogoWhite} 
        alt="Edunoia Logo" 
        className={styles.logo}
      />
    </div> */}
        
        <div className={styles.footerWrapper}>
        
          <p className={styles.description}>
            Edunoia is a consultancy offering advisor, brand thinking and
            communication strategies to a broad cross-section of the
            educational society.
          </p>
          
          <div className={styles.navigationContainer}>
            <nav className={styles.navLinks}>
              {navItems.map(({ label, path, isActive }) => (
                <a
                  key={path}
                  href={path}
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className={styles.socialLinks}>
              {socialLinks.map(({ icon, href, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon}
                    alt={alt}
                    className={styles.socialIcon}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
          <p className={styles.copyright}>
            Copyright 2021 Edunoia. All Rights Reserved. Edunoia is an
            affiliate of ABND.
          </p>
        </div>
      </div>
    
    </footer>
  );
}
