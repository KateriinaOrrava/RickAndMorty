
import styles from './About.module.css'
const About = () => {
    return (
      <div className={styles.about_container}>
        <h1 >About</h1>
        {/* <img src="https://images6.alphacoders.com/909/thumbbig-909641.webp" alt="rick-and-morty-2020" /> */}
        <p>
          Rick and Morty is the Emmy award-winning half-hour animated hit comedy
          series on Adult Swim that follows a sociopathic genius scientist who
          drags his inherently timid grandson on insanely dangerous adventures
          across the universe. Rick Sanchez is living with his daughter Beth’s
          family and constantly bringing her, his son-in-law Jerry, granddaughter
          Summer, and grandson Morty into intergalactic escapades.
        </p>
        
      </div>
    );
  };
  
  export default About;