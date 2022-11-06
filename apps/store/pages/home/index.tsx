import React, {Fragment, Suspense} from 'react';
import dynamic from 'next/dynamic';
import styles from './index.module.css';

// const BuyButton = dynamic(
//   async () => import('checkout/button'),
//   {
//     ssr: false,
//   }
// );

const RemoteTitle = dynamic(() => import('checkout/title'),  {suspense: true});

const BuyButton = dynamic(() => import('checkout/button'),  {suspense: true});

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Home!</h1>
      dios
      <Suspense>
        <BuyButton onClick={() => alert('Hello, Module Federation!')}>Add to Cart</BuyButton>
      </Suspense>
      <Suspense>
        <RemoteTitle />
      </Suspense>
    </div>
  );
}

export default Home;
