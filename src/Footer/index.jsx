/******************************************************************************
 *
 *  Footer Component
 *
* *****************************************************************************/
import styles from './Footer.module.css';
import gitIcon from '/icons/icon-github.svg';

function Footer() {
  return(
    <footer id="contact" className={styles.footer}>
      <p>&copy; Copyright {new Date().getFullYear()} - MxTyler</p>

      <a href="https://github.com/tynielsen/mxtyler-reactapp" target="_blank"><img src={gitIcon} width="36" height="36" alt="React Apps GitHub Repository" title="This App's GitHub Repository" /></a>
    </footer>
  );
}

export default Footer;
