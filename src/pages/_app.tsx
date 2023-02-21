import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dev Challenges - 404 Not Found</title>
        <meta
          name="description"
          content="A solution for DevChallenges.io 404 Not Found challenge."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/devchallenges.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
