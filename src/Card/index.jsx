/******************************************************************************
 *
 *  Card Component
 *
* *****************************************************************************/
import styles from './Card.module.css';

const Card = (props) => {
  return(
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        {props.children}
      </div>
      <div className={styles.accents}>
        <span className={styles.topLight}></span>
        <span className={styles.light}></span>
        <span className={styles.lightSmall}></span>
      </div>
    </div>
  );
}

export default Card;
