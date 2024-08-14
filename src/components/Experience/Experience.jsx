import React from 'react'
import styles from './Experience.module.css'
import { getImageUrl } from '../../utils'

const Experience = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
           <img src={getImageUrl("experience/BharatMobility-modified.png")} alt="laptop" className={styles.aboutImage} />
           <div>
           <h2 className={styles.discriptionh2}>Hero MotorCorps</h2>
           <p className={styles.discription}>I had the opportunity to work with Hero MotoCorp at the Bharat Global Mobility Expo 2024, initiated by Prime Minister Narendra Modi, where I represented the new Hero Centennial motorcycle. As part of a hero team, I engaged with visitors, explained the bike’s features, and gathered feedback on its price and build quality. I shared this feedback with the Hero team and had the chance to meet Mr. Pawan Munjal, the CEO. This experience strengthened my communication skills and showcased my ability to handle key responsibilities.</p>
           </div>
        </div>

    </section>
  )
}

export default Experience