import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Pakshik Banga</h1>
            {/* <p className={styles.discription}>I am a third-year undergraduate Computer Science and Technology Student at MAIT.</p> */}
            <a href="mailto:pakshikbanga2004@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <div></div>
        <img src={getImageUrl("hero/PreetFormalPhoto-modified.png")} alt="Hero Image of me" className={styles.heroImg}/>
        <div className={styles.top} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero