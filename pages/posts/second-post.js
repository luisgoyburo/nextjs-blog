import Link from "next/link";
import Head from "next/head";
import Alert from "../../components/alert";

export default function SecondPost() {
  return (
    <Alert type="success">
      <Head>
        <title>Secong Post</title>
      </Head>
      <h1>Second Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Alert>
  );
}
