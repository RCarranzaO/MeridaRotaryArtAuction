import "../styles/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=devide-width" />
        <title> Rotary Art Auction </title>
        <meta
          key="description"
          name="description"
          content="Club de Rotary International"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
