import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const balance = amounts.reduce((acc, cur) => (acc += cur), 0).toFixed(2);

  return (
    <div>
      <h4>Balance</h4>
      <h1
        id="balance"
        className={balance < 1 ? 'minus' : 'plus'}
        style={{ margin: '1rem 0' }}
      >
        $ {balance}
      </h1>
    </div>
  );
};

export default Balance;
