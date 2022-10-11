import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import {FaFacebookF, FaLinkedin, FaTwitter, FaInstagram, FaApple } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
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
        <section className={styles.secInfo}>
          <div className={styles.sec1}>
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
              <img
                src="/media/getStarted.4a3ae4f517cc00f27d62.png"
                alt="sava"
              />
            </div>
          </div>
          <div className={styles.sec1}>
            <div className={styles.secImg}>
              <img src="/media/Cards.7a71d3315b61127555b3.png" alt="sava" />
            </div>
            <div className={styles.text2}>
              <p>
                Card issue with your <br /> team
                <span className={styles.min}> instantly.</span>
              </p>

              <h2>
                With unlimited virtual cards that you can issue to each
                employee, each team budget or use-case, bid farewell to card
                sharing, OTPs and embrace faster, hassle-free purchasing,
                tracked in real time.
              </h2>
              <button>
                learn More
                <BsArrowRight className={styles.icon} />
              </button>
            </div>
          </div>
        </section>

        <section className={styles.darkk}>
          <div className={styles.darkInfo}>
            <div className={styles.test3}>
              <p>
                Access to powerful spend management{" "}
                <span className={styles.min}> tools.</span>
              </p>

              <h4>
                Get full control over your company finances and real-time
                transparency—all in a clean, modern, easy-to-use interface.
                learn more
              </h4>
              <button>
                learn More
                <BsArrowRight className={styles.icon} />
              </button>
            </div>
            <img src="/media/tool.abd8546f5df966bb1ff6.png" alt="" />
          </div>
          <div className={styles.darkInfo}>
            <img src="/media/reconcile.9ef922a5b77438b25d95.png" alt="" />

            <div className={styles.test3}>
              <p>
                Access to powerful spend management{" "}
                <span className={styles.min}> tools.</span>
              </p>

              <h4>
                Get full control over your company finances and real-time
                transparency—all in a clean, modern, easy-to-use interface.
                learn more
              </h4>
              <button>
                learn More
                <BsArrowRight className={styles.icon} />
              </button>
            </div>
          </div>
        </section>

        <section className={styles.third}>
          <h2>
            Turn your debit to a <span className={styles.min}>credit card</span>
          </h2>

          <div className={styles.section}>
            <div className={styles.secCap}>
              <img
                src="/media/flexible.e239cb1bba7c2b21f0a09978b95368b4.svg"
                alt=""
              />
              <h3>Flexible repayment plan</h3>
              <p>
                Convenient repayment options that range from daily, to weekly or
                monthly repayment plans.
              </p>
            </div>
            <div className={styles.secCap}>
              <img
                src="/media/flexible.e239cb1bba7c2b21f0a09978b95368b4.svg"
                alt=""
              />
              <h3>Flexible repayment plan</h3>
              <p>
                Convenient repayment options that range from daily, to weekly or
                monthly repayment plans.
              </p>
            </div>
            <div className={styles.secCap}>
              <img
                src="/media/flexible.e239cb1bba7c2b21f0a09978b95368b4.svg"
                alt=""
              />
              <h3>Flexible repayment plan</h3>
              <p>
                Convenient repayment options that range from daily, to weekly or
                monthly repayment plans.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.coming}>
          <h2>
            Coming soon <br />
            <span className={styles.min}>features.</span>
          </h2>
          <div className={styles.comingSec}>
            <div className={styles.comingSecCap}>
              <button>coming soon</button>

              <img
                src="/media/money-2.fcd4c7d7eee625b6e6b80c5eb879e17a.svg"
                alt=""
              />
              <h3>Flexible repayment plan</h3>
              <p>
                Convenient repayment options that range from daily, to weekly or
                monthly repayment plans.
              </p>
            </div>
            <div className={styles.comingSecCap}>
              <button>coming soon</button>

              <img
                src="/media/money-2.fcd4c7d7eee625b6e6b80c5eb879e17a.svg"
                alt=""
              />
              <h3>Flexible repayment plan</h3>
              <p>
                Convenient repayment options that range from daily, to weekly or
                monthly repayment plans.
              </p>
            </div>
            <div className={styles.comingSecCap}>
              <button>coming soon</button>

              <img
                src="/media/money-2.fcd4c7d7eee625b6e6b80c5eb879e17a.svg"
                alt=""
              />
              <h3>Flexible repayment plan</h3>
              <p>
                Convenient repayment options that range from daily, to weekly or
                monthly repayment plans.
              </p>
            </div>
            <div className={styles.comingSecCap}>
              <button>coming soon</button>
              <img
                src="/media/money-2.fcd4c7d7eee625b6e6b80c5eb879e17a.svg"
                alt=""
              />
              <h3>Flexible repayment plan</h3>
              <p>
                Convenient repayment options that range from daily, to weekly or
                monthly repayment plans.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.user}>
          <h2>User excitement</h2>

          <div className={styles.userCap}>
            <div className={styles.use}>
              <img src="/media/melvyn.6ab66e8e38ed0878e6d5.jpeg" alt="" />
              <div className={styles.useText}>
                <h2>Melvyn Lubega</h2>
                <h1>Director at G01</h1>
                <p>
                  Entrepreneurs are the lifeblood of South Africa. I’m excited
                  to see this avant garde technology support our entrepreneurs,
                  making business processes easier for them.
                </p>
              </div>
            </div>
            <div className={styles.use}>
              <img src="/media/melvyn.6ab66e8e38ed0878e6d5.jpeg" alt="" />
              <div className={styles.useText}>
                <h2>Melvyn Lubega</h2>
                <h1>Director at G01</h1>
                <p>
                  Entrepreneurs are the lifeblood of South Africa. I’m excited
                  to see this avant garde technology support our entrepreneurs,
                  making business processes easier for them.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.waitlist}>
          <h2>
            Join the <span className={styles.min}>waitlist</span>
          </h2>

          <button>
            Join now
            <BsArrowRight className={styles.icon} />
          </button>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerCon}>
          <div className={styles.first}>
            <div className={styles.firstCon}>
              <img src="/media/whitelogo.png" alt="logo" />

              <p>
                Ground Floor, Strouthos Place, <br />
                The Offices of Hyde Park, Block B,
                <br />
                Johannesburg, 2196
              </p>
            </div>

            <div className={styles.firstUl}>
              <ul>
                <p>More Info</p>
                <li>Get Sava</li>
                <li>Get Sava</li>
                <li>Get Sava</li>
              </ul>
              <ul>
                <p>More Info</p>
                <li>Get Sava</li>
                <li>Get Sava</li>
                <li>Get Sava</li>
              </ul>
              <ul>
                <p>More Info</p>
                <li>Get Sava</li>
                <li>Get Sava</li>
                <li>Get Sava</li>
              </ul>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.store}>
              <button>
                <FaApple className={styles.btnIcon} />
                <p>
                  Soon on <br />
                  <span>App Store</span>
                </p>
              </button>
              <button>
                <IoLogoGooglePlaystore className={styles.btnIcon} />
                <p>
                  Soon on <br />
                  <span>App Store</span>
                </p>
              </button>
            </div>

            <div className={styles.social}>
              <h2>Social</h2>
              <div className={styles.socialIcons}>
                <div className={styles.sIcons}>
                  <FaFacebookF />
                </div>
                <div className={styles.sIcons}>
                  <FaFacebookF />
                </div>
                <div className={styles.sIcons}>
                  <FaFacebookF />
                </div>
                <div className={styles.sIcons}>
                  <FaFacebookF />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
