import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  let income = amounts
    .reduce((acc, cur) => {
      if (cur > 0) {
        return (acc += cur);
      }
      return acc;
    }, 0)
    .toFixed(2);

  let expense = amounts
    .reduce((acc, cur) => {
      if (cur < 0) {
        return (acc += cur);
      }
      return acc;
    }, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {numberWithCommas(Math.abs(income).toFixed(2))}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {numberWithCommas(Math.abs(expense).toFixed(2))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
