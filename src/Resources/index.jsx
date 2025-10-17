import styles from './Resources.module.css';
import Card from "../Card";



const Resources = () => {
  const listItems = ri.map((item, index) =>
    <li key={index}>
      <a href={item.url}>{item.title}</a>
    </li>
  );

  return(
    <section id="resources" className={styles.resourceLinks}>
      <Card>
        <h2>
          Resources
        </h2>

        <p>
          A curated collection of tools, libraries, and resources I've 
          gathered over the years - open source and free (mostly).
        </p>

        <ul id="loop">
          {listItems}
        </ul>
          
        <p>
          These are genuinely valuable resources - packed with great info 
          and insights that have shaped my work. Know of any I should add? 
          I'd love to hear from you.
        </p>
      </Card>
    </section>
  );
}

const listItems = {
  "resourceList": [
    {
      "title": "Tiny Wow",
      "url": "https://tinywow.com/"
    },
    {
      "title": "CSS Tricks",
      "url": "https://css-tricks.com/"
    },
    {
      "title": "edX",
      "url": "https://www.edx.org/"
    },
    {
      "title": "The Odin Project",
      "url": "https://www.theodinproject.com/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/"
    },
    {
      "title": "Learn-JS",
      "url": "https://learn-js.org/"
    },
    {
      "title": "Modern JS",
      "url": "https://javascript.info/"
    },
    {
      "title": "JavaScript Roadmap",
      "url": "https://roadmap.sh/javascript"
    },
    {
      "title": "React.JS",
      "url": "https://react.dev/learn"
    },
    {
      "title": "TypeScript w/React",
      "url": "https://www.freecodecamp.org/news/learn-typescript-with-react-handbook/"
    },
    {
      "title": "Vue.JS",
      "url": "https://www.freecodecamp.org/news/build-a-portfolio-with-vuejs/"
    },
    {
      "title": "HTML",
      "url": "https://html.com/"
    },
    {
      "title": "REST API",
      "url": "https://restapitutorial.com/"
    }
  ]
}
const ri = listItems.resourceList;

export default Resources;
