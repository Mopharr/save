import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sava</title>
        <meta name="description" content="Sava" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <img
            src="/media/blackLogo.e737998b2fa02e9c2b57d34e7fc6751b.svg"
            alt="logo"
          />

          <ul>
            <li>Product</li>
            <li>Credit</li>
            <li className={styles.get}>Get Data</li>
            <li>Product</li>
            <li>
              <img
                src="/media/flag_south_africa.14bf99b9dc7e9c38fa327667063110c5.svg"
                alt="logo"
              />

            </li>
          </ul>
        </nav>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default Home
