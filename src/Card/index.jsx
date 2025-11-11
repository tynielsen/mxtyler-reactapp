/******************************************************************************
 *
 *  Card Component
 *
* *****************************************************************************/
import styles from './Card.module.css';

const Card = (props) => {
  return(
    <div className={styles.container}>
      <div className={styles.card}>
        {props.children}
      </div>
      <div className={styles.accents}>
        <span className={styles.topLightBar}></span>
        <span className={styles.lrgCircleLight}></span>
        <span className={styles.smCircleLight}></span>
      </div>
    </div>
  );
}

export default Card;
