import "@/styles/style.scss";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>creative agency</title>
        <meta
          name="description"
          content="creative agency landing page with sass and nextjs"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
