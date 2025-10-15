/******************************************************************************
 *
 *  Header Component
 *
* *****************************************************************************/
import styles from './Header.module.css';

function Header() {

  return(
    <header className={styles.header}>
      <a href="#" className={styles.logo}>T is for Techy, and Tech is for T(yler)</a>

      <nav className={styles.mainNav}>
        <a href="#hero">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
