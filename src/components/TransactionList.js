import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((t, i) => (
          <Transaction transaction={t} key={i} />
        ))}
      </ul>
    </div>
  );
};
