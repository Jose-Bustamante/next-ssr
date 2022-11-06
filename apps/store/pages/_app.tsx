import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/header/header';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to store!</title>
      </Head>
      <main className="app">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
