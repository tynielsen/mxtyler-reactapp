/******************************************************************************
 *
 *  Header Component
 *
* *****************************************************************************/
import { useState } from 'react';
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
        {/* <a onClick={(e) => handleClick(e)} href="#contact">Contact</a> */}
      </nav>
    </header>
  );
}

export default Header;
