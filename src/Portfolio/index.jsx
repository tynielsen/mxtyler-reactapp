/******************************************************************************
 *
 *  Portfolio Component
 *
* *****************************************************************************/
import styles from './Portfolio.module.css';
import sgImg1 from '/screengrab-campbells.png';
import sgImg2 from '/screengrab-pepsico.png';
import sgImg3 from '/screengrab-my529.png';

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
            Architected a scalable WordPress multi-site ecosystem for Campbell's 
            brand portfolio (Soup, V8, Swanson, Prego, Pace, and more), using a 
            modular parent-child theme system and Sass CSS for consistent, 
            responsive design across all implementations. Built with WCAG 
            accessibility compliance, SEO optimization, and an intuitive admin 
            interface that empowers non-technical users to manage updates independently.
          </p>
          {/* <span>
            View Project &rarr;
          </span> */}
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
            Led a team of 4-6 engineers for a content management system, 
            balancing team guidance with hands-on technical contribution. 
            Prioritized accessibility (WCAG), responsive design, and SEO while 
            engineering a modular component system that reduced development 
            time and content management.
          </p>
          {/* <p>
            As team lead, architected the front-end for a content management 
            system, guiding a team of 4-6 engineers while prioritizing 
            accessibility (WCAG), responsive design, and SEO. Engineered a 
            modular component system that reduced development time and ensured 
            consistency across the platform.
          </p> */}
          {/* <span>
            View Project &rarr;
          </span> */}
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
            Engineered interactive data visualizations with D3.js and real-time 
            input controls, enabling users to dynamically explore datasets and 
            see changes rendered instantly. This approach reduced analysis time 
            and improved data accessibility for non-technical stakeholders.
          </p>
          {/* <span>
            View Project &rarr;
          </span> */}
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
