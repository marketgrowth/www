import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Market Growth - Hire on-demand senior marketing engineers </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.descriptionTag}>
          <code className={styles.code}>Market Growth, Inc.</code>
        </p>
        <h1 className={styles.title}>
          Get technical, on-demand help from marketing engineers to help your go-to-market efforts. 
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>We help instrument, manage, and integrate marketing websites and apps into your marketing technology stack.</code>
        </p>

        <div className={styles.grid}>
          <a href="https://segment.com" target="_blank" className={styles.card}>
            <h3>Segment &rarr;</h3>
            <p>Use this tool as 'air traffic control' to manage how your data sources and destinations interact.</p>
          </a>

          <a href="#" target="_blank" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p><span style={{color: 'red'}}>Coming soon!</span> Insights on MarTech operations and latest trends to help you keep up.</p>
          </a>

          <a
            href="https://growthux.com" target="_blank"
            className={styles.card}
          >
            <h3>Who's here? &rarr;</h3>
            <p>Currently not accepting new clients; although open to connect for OSS collab work.</p>
          </a>

          <a
            href="mailto:victor@marketgrowth.io"
            className={styles.card}
          >
            <h3>Contact &rarr;</h3>
            <p>Have something interesting to share or just want to talk shop? Email me.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      &copy; 2021. Market Growth, Inc. All Rights Reserved.
      </footer>
    </div>
  )
}
