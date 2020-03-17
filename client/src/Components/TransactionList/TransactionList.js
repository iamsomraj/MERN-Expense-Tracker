import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Transaction from './Transaction/Transaction';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => {
          const id = transaction._id;
          return <Transaction key={id} transaction={transaction} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
