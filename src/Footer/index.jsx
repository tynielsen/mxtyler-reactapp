/******************************************************************************
 *
 *  Footer Component
 *
* *****************************************************************************/
import styles from './Footer.module.css';
import GitHubIcon from '/src/assets/icons/icon-github';

function Footer() {
  return(
    <footer id="contact" className={styles.footer}>
      <p>&copy; Copyright {new Date().getFullYear()} - MxTyler</p>

      <a href="https://github.com/tynielsen/mxtyler-reactapp" target="_blank">
        <GitHubIcon fill="#000" width="36" height="36" />
      </a>
    </footer>
  );
}

export default Footer;
