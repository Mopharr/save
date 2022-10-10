import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import styles from "../styles/Home.module.css";

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

        <header className={styles.header}>
          <div className={styles.text}>
            <p className={styles.big}>
              The Spending Solution <br /> <span>Desgin for your business</span>
            </p>
            <p className={styles.small}>
              One central spend-management platform for forward-thinking
              entrepreneurs
            </p>

            <div className={styles.input}>
              <input type="text" placeholder="Join the waitlist" />
              <button>Get SAVA</button>
            </div>
          </div>

          <div className={styles.headImg}></div>
        </header>

        <section>
          <iframe
            className={styles.iff}
            width="300"
            height="400"
            src="https://player.vimeo.com/video/683738366?h=7bcdf26bb0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </section>

        <section className={styles.sec1}>
          <div className={styles.text2}>
            <p>
              Get started with <span className={styles.sa}>Sava</span> in{" "}
              <span className={styles.min}>minute</span>. Free of charge
            </p>

            <h2>
              Start right now, at no cost to you. No additional costs for your
              business cards, which means SAVA is free to your company.
            </h2>
            <button>
              Sign Up
              <BsArrowRight className={styles.icon} />
            </button>
          </div>

          <div className={styles.secImg}>
            <img src="/media/getStarted.4a3ae4f517cc00f27d62.png" alt="sava" />
          </div>
        </section>
        <section className={styles.sec1}>
          <div className={styles.secImg}>
            <img
              src="/media/Cards.7a71d3315b61127555b3.png"
              alt="sava"
            />
          </div>
          <div className={styles.text2}>
            <p>
              Card issue with your <br /> team  
              <span className={styles.min}> instantly.</span>
            </p>

            <h2>
              With unlimited virtual cards that you can issue to each employee,
              each team budget or use-case, bid farewell to card sharing, OTPs
              and embrace faster, hassle-free purchasing, tracked in real time.
            </h2>
            <button>
              learn More
              <BsArrowRight className={styles.icon} />
            </button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Home;
