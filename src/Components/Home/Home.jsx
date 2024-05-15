import React from 'react'
import styles from "./Home.module.css"

function Home() {
  return (
    <section className={styles.home}>
      <img className={styles.homeImg} src="/home-logo.png" alt="" />
      <p className={styles.about}>Welcome to Bazaar Plaza, your premier online shopping destination! Discover a wide range of products, from traditional crafts to modern electronics. Explore our spice market for delightful aromas, indulge in global cuisines at our eateries, and experience live events. Shop now for fantastic deals and an exceptional shopping journey at Bazaar Plaza!</p>
    </section>
  )
}

export default Home