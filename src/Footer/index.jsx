/******************************************************************************
 *
 *  Footer Component
 *
* *****************************************************************************/
import styles from './Footer.module.css';
import GitHub from '/src/assets/icons/icon-github.svg';

function Footer() {
  return(
    <footer id="contact" className={styles.footer}>
      <p>&copy; Copyright {new Date().getFullYear()} - MxTyler</p>

      <a href="https://github.com/tynielsen/mxtyler-reactapp" target="_blank">
        <img src={GitHub} width="36" height="36" style={{color:'purple'}} alt="GitHub Repository" title="This App's GitHub Repository" />
      </a>
    </footer>
  );
}

export default Footer;
