/******************************************************************************
 *
 *  Portfolio Component
 *
* *****************************************************************************/
import styles from './Portfolio.module.css';
import sgImg1 from '/public/screengrab-campbells.png';
import sgImg2 from '/public/screengrab-pepsico.png';
import sgImg3 from '/public/screengrab-my529.png';

function Portfolio() {
  return(
    <section id="portfolio" className={styles.portfolio}>
      <h2>
        Featured Portfolio Projects
      </h2>

      <div className={styles.container}>
        <a
          href="https://www.campbells.com/"
          className={styles.projectCard}
          target="_blank"
        >
          <img
            alt="Campbell's Homepage Screenshot"
            title="Campbell's"
            src={sgImg1}
          />
          <h3>Campbell's</h3>
          <p>
            Developed a responsive ecosystem of multiple websites using WordPress, custom WP themes, 
            a core WP theme that the custom themes use. For styles we used Sass CSS. I was able to 
            incorporate all brands owned by Campbell's (Soup, V8, Swanson, Prego, Pace, and more) into 
            this WordPress multi-site, or like we called it: ecosystem.
          </p>
          <span>
            View Project &rarr;
          </span>
        </a>

        <a
          href="https://www.pepsico.com/"
          className={styles.projectCard}
          target="_blank"
        >
          <img
            alt="PepsiCo Homepage Screenshot"
            title="PepsiCo"
            src={sgImg2}
          />
          <h3>PepsiCo</h3>
          <p>
            Led the Front-End and User Interface engineering for a content management system,
            focusing on accessibility, responsive design, and SEO.
          </p>
          <span>
            View Project &rarr;
          </span>
        </a>

        <a
          href="https://my529.org/investment-options/"
          className={styles.projectCard}
          target="_blank"
        >
          <img
            alt="my529: Educational Savings Plan Screenshot"
            title="my529: Educational Savings Plan"
            src={sgImg3}
          />
          <h3>
            my529
          </h3>
          <p>
            Rendered data into dynamic graphs and charts using D3.js library. I then linked 
            those graphs to input range sliders to update graph data in realtime. Best example 
            is a quarter of the way down the page at the provided URL.
          </p>
          <span>
            View Project &rarr;
          </span>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
