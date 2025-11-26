/******************************************************************************
 *
 *  Header Component
 *
* *****************************************************************************/
import { useState } from 'react';
import GitHubIcon from '/src/assets/icons/icon-github';
import styles from './Header.module.css';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive(!!isActive);

    Array.from(document.querySelectorAll('nav a')).forEach(
      (el) => el.classList.remove(styles.current)
    );

    e.target.className = styles.current;
  }

  return(
    <header className={styles.header}>
      <a href="#" className={styles.logo}>Web Engineering by TN</a>

      <nav className={styles.mainNav}>
        <a onClick={(e) => handleClick(e)} href="#hero">Home</a>
        <a onClick={(e) => handleClick(e)} href="#portfolio">Portfolio</a>
        <a onClick={(e) => handleClick(e)} href="#resources">Resources</a>
        <a href="https://tynielsen.github.io/techieshabitat/" target="_blank">TechiesHabitat.com</a>
        {/* <a onClick={(e) => handleClick(e)} href="#contact">Contact</a> */}
      </nav>
      <a href="https://github.com/tynielsen/mxtyler-reactapp" target="_blank">
        <GitHubIcon fill="currentColor" width="36" height="36" />
      </a>
    </header>
  );
}

export default Header;
