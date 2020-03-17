import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import { numberWithCommas } from '../../../utils/format';

export default ({ transaction }) => {
  const { deleteTransactions } = useContext(GlobalContext);

  return (
    <li
      className={transaction.amount < 0 ? 'minus' : 'plus'}
    >
      {transaction.text}
      <span>
        {(transaction.amount < 0 ? '-' : '+') +
          numberWithCommas(Math.abs(transaction.amount).toFixed(2))}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransactions(transaction._id)}
      >
        x
      </button>
    </li>
  );
};
