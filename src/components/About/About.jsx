import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="laptop" className={styles.aboutImage} />
           <p className={styles.discription}>I am a third-year undergraduate Computer Science and Technology Student at MAIT. I am always open to challenges that helps me in developing skills & abilities. Apart from that I am a code enthusiast who enjoys experimenting latest technologies. As for my future, I hope to one day work as a Full Stack Developer, work with a diverse team and solve complex problems. In my free time, you can find me solving DSA problems!</p>
        </div>

    </section>
  )
}

export default About