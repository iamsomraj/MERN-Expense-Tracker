import React, { useState, useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

const AddTransaction = () => {
  let [text, setText] = useState('');
  let [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={event => setText(event.target.value)}
            id="text"
            placeholder="Enter Text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            <p className="minus">Expense -</p>
            <p className="plus">Income +</p>
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={event => setAmount(event.target.value)}
            placeholder="Enter Amount"
          />
        </div>
        <button
          className="btn"
          onClick={event => {
            event.preventDefault();
            if (text !== '' && amount !== '' && isFinite(amount)) {
              addTransaction({
                id: Math.floor(Math.random() * 1000000),
                text: text,
                amount: +amount
              });
            } else {
              alert('Check the input fields');
            }
          }}
        >
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
