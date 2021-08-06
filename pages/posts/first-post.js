import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

// EXAMPLE OF FETCH OF EXTERNAL API
export async function getStaticProps() {
  const url = `https://api.github.com/users/hacktivist123/repos`;
  const result = await fetch(url);
  return {
    props: {
      result: await result.json(),
    },
  };
}

export default function FirstPost({ result }) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Repo</h2>
        <ul className={utilStyles.list}>
          {result.map(({ id, name, node_id }) => (
            <li className={utilStyles.listItem} key={id}>
              {name}
              <br />
              {node_id}
              <br />
              {id}
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
