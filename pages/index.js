import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MarketGrowth - Hire on-demand senior marketing engineers </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="facebook-domain-verification" content="gwxm6d3nk7ff1zqln8nmymjfw4gfvz" />
      </Head>

      <main className={styles.main}>
        <p className={styles.descriptionTag}>
          <code className={styles.code}>MarketGrowth LLC</code>
        </p>
        <h1 className={styles.title}>
          We build and provide products and services for demand marketers. 
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>We instrument, manage, and integrate marketing websites and apps into your MarTech stack.</code>
        </p>

        <div className={styles.grid}>
          <a href="mailto:victor@marketgrowth.io" target="_blank" className={styles.card}>
            <h3>Code or No-Code &rarr;</h3>
            <p>We can inherit or jumpstart the design+build+integration of your digital assets used for go-to-market.</p>
          </a>

          <a href="mailto:victor@marketgrowth.io" target="_blank" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p><span style={{color: 'red'}}>Coming soon!</span> Insights on MarTech operations and latest trends to help you keep up.</p>
          </a>

          <a
            href="mailto:victor@marketgrowth.io" target="_blank"
            className={styles.card}
          >
            <h3>Who's here? &rarr;</h3>
            <p>We are a team of technical marketers who understand the complexity of integrating marketing technology.</p>
          </a>

          <a
            href="mailto:victor@marketgrowth.io"
            className={styles.card}
          >
            <h3>Contact &rarr;</h3>
            <p>Select client engagements are available. Have something interesting to share or want to talk shop? Email me.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      &copy; 2023 MarketGrowth LLC. All Rights Reserved.
      </footer>
    </div>
  )
}
