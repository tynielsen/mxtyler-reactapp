/******************************************************************************
 *
 *  Footer Component
 *
* *****************************************************************************/
import styles from './Footer.module.css';

function Footer() {
  return(
    <footer className={styles.footer}>
      <p>&copy; Copyright {new Date().getFullYear()} - MxTyler</p>
    </footer>
  );
}

export default Footer;
