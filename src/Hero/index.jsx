/******************************************************************************
 *
 *  Hero Component, consumes Card Component
 *
* *****************************************************************************/
import styles from './Hero.module.css';
import Card from "../Card";

function Hero() {
  return(
    <section id="hero" className={styles.hero}>
      <Card>
        <h1>
          Fresh. Hot. <span className={styles.accentColor}>Pixel-Perfect.</span>
        </h1>
        <p>
          You know the feeling when everything just… clicks? When users smile 
          instead of swear; we usually hear silence in those cases. It's a great 
          feeling when code runs so smooth it practically purrs. That's not luck. 
          Nor is it something to be memorized or read in a classroom. That's 
          craftwork that was learned; a lesson learned through effort, aka., 
          wisdom and experience.
        </p>
        <p>
          For 15 years, I've been obsessed with building and rebuilding …and 
          rebuilding… resilient systems that just work. My passion is taking 
          on complex challenges and turning them into the most simple-looking 
          solutions that teams can be proud of. Along the way, helpful 
          resources are stumbled upon, and hopefully this will help others 
          find some valuable resources too.
        </p>
        <p className={styles.wip}><strong>
          * By the way, please excuse the placeholder content and links 
          to nowhere - this website is a new work-in-progress and is actively 
          being built. Currently, the homepage is the only live page, and some 
          content is still being refined.
        </strong></p>
      </Card>
    </section>
  );
}

export default Hero;
