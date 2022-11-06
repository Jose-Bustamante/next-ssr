import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

// export function Header(props: HeaderProps) {
const Header = () => (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/home">
            Shared Components Page
          </Link>
        </li>
        <li>
          <Link href="/checkout">
            Checkout
          </Link>
        </li>
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
          padding-right: 10px;
        }
      `}</style>
    </nav>
  );

export default Header;





