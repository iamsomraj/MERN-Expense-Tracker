import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Balance from './Components/Balance/Balance';
import IncomeExpense from './Components/IncomeExpense/IncomeExpense';
import TransactionList from './Components/TransactionList/TransactionList';
import AddTransaction from './Components/AddTransaction/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div style={{ padding: '2rem' }}>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
