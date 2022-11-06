import { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {Suspense} from "react";
import './styles.css';

const Header = dynamic(() => import('store/header'),  {suspense: true});


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to checkout!</title>
      </Head>
      <main className="app">
        <Suspense>
          <Header/>
        </Suspense>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
