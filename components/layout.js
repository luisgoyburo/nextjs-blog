<<<<<<< HEAD
import Head from "next/head";
import Image from "next/image";
import Styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

=======
import styles from "./layout.module.css";
import Image from "next/image";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
>>>>>>> 7f6acb1 (Este es el primer commit de esta aplicacion)
const name = "Luis Goyburo";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
<<<<<<< HEAD
    <div className={Styles.container}>
=======
    <div className={styles.container}>
>>>>>>> 7f6acb1 (Este es el primer commit de esta aplicacion)
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
<<<<<<< HEAD
          content="Learn how to build a personal website with Next.js"
=======
          content="Learn how to build a personal website using Next.js"
>>>>>>> 7f6acb1 (Este es el primer commit de esta aplicacion)
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
<<<<<<< HEAD
      <header className={utilStyles.header}>
=======
      <header className={styles.header}>
>>>>>>> 7f6acb1 (Este es el primer commit de esta aplicacion)
        {home ? (
          <>
            <Image
              priority
<<<<<<< HEAD
              src="/images/fototwitter.jpg"
=======
              src="/images/profile.jpg"
>>>>>>> 7f6acb1 (Este es el primer commit de esta aplicacion)
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
<<<<<<< HEAD
            <h1 className={utilStyles.heading2X1}>{name}</h1>
=======
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
>>>>>>> 7f6acb1 (Este es el primer commit de esta aplicacion)
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
<<<<<<< HEAD
                  src="/images/fototwitter.jpg"
=======
                  src="/images/profile.jpg"
>>>>>>> 7f6acb1 (Este es el primer commit de esta aplicacion)
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
<<<<<<< HEAD
        <div className={Styles.backToHome}>
          <Link href="/">
            <a> Back To Home </a>
=======
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
>>>>>>> 7f6acb1 (Este es el primer commit de esta aplicacion)
          </Link>
        </div>
      )}
    </div>
  );
}
