import Head from 'next/head'
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>        
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Hi I'm Luis, developer for ever</p>
        <p>
        (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

      </section>
      {/* <section>
        <h2>{ allPostsData }</h2>
        <h2> Texto simple </h2>
      </section> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
// export async function getStaticProps() {
//   const allPostsData = "prueba getstaticprops"
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
=======
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props : {
>>>>>>> 7f6acb1 (Este es el primer commit de esta aplicacion)
      allPostsData
    }
  }
}
<<<<<<< HEAD
=======
=======
>>>>>>> 7f6acb1 (Este es el primer commit de esta aplicacion)

export default function Home( { allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm developer from Lima, Perú</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <h2>
        <Link href="/posts/first-post">
          <a>My first post</a>
        </Link>
      </h2>
      <h2>
        <Link href="/posts/second-post">
          <a>My Second post</a>
        </Link>
      </h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(( { id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {date}
              <br />
              {id}
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
<<<<<<< HEAD
}
>>>>>>> 00ec149 (Initial commit from Create Next App)
=======
}
>>>>>>> 7f6acb1 (Este es el primer commit de esta aplicacion)
