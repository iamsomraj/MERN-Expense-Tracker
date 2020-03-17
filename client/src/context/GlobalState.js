import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const url = '/transactions/';

  // Actions

  const getTransactions = () => {
    axios
      .get(url)
      .then(response => {
        dispatch({
          type: 'GET_TRANSACTIONS',
          payload: response.data.response
        });
      })
      .catch(error => {
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: error
        });
      });
  };

  const deleteTransactions = id => {
    axios
      .delete(url + id)
      .then(() => {
        dispatch({
          type: 'DELETE_TRANSACTIONS',
          payload: id
        });
      })
      .catch(error => {
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: error
        });
      });
  };

  const addTransaction = transaction => {
    axios
      .post(url, transaction)
      .then(response => {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: response.data.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: error
        });
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransactions,
        addTransaction,
        getTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
