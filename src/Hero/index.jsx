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
          You know that feeling when everything just… clicks? When users smile 
          instead of swear, and your inbox stays quiet. When code runs so smooth 
          it practically purrs. That's not luck, and it's not something you 
          memorize from a book. That's experience—earned through mistakes, late 
          nights, and lessons learned the hard way. Some call it wisdom. I 
          call it craft.
        </p>
        <p>
          For almost 15 years, I've been obsessed with one thing: building 
          resilient systems that just work. I love taking complex challenges 
          and distilling them into elegant solutions—the kind that make teams 
          say 'wait, that's it?' The kind that look simple because all the 
          hard thinking happened behind the scenes.
        </p>
        <p>
          Along the way, I've collected tools, techniques, and hard-won 
          lessons. This site is where I share them.
        </p>
        <p className={styles.wip}><strong>
          * This site is freshly launched and growing. More content is on the way!
        </strong></p>
      </Card>
    </section>
  );
}

export default Hero;
