import styles from './buy-button.module.css';

/* eslint-disable-next-line */
export interface BuyButtonProps {}

export function BuyButton(props: BuyButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BuyButton!</h1>
    </div>
  );
}

export default BuyButton;
