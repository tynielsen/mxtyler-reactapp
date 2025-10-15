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
    </header>
  );
}

export default Header;
