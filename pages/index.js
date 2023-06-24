import React, { useState } from 'react';
import Head from 'next/head';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C5F2D',
    },
    secondary: {
      main: '#97BC62',
    },
  },
});

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const editTransaction = (index, updatedTransaction) => {
    const newTransactions = [...transactions];
    newTransactions[index] = updatedTransaction;
    setTransactions(newTransactions);
  };
  

  const deleteTransaction = (index) => {
    const newTransactions = [...transactions];
    newTransactions.splice(index, 1);
    setTransactions(newTransactions);
  };

  // Calculate the current balance
  const balance = transactions.reduce(
    (total, transaction) =>
      transaction.type === 'income'
        ? total + transaction.amount
        : total - transaction.amount,
    0
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Personal Finance Tracker</title>
        </Head>

        <Container maxWidth="sm">
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Personal Finance Tracker
          </Typography>
          <TransactionForm addTransaction={addTransaction} />
          <TransactionList
            transactions={transactions}
            editTransaction={editTransaction}
            deleteTransaction={deleteTransaction}
          />
          <div className="balance">
            <Typography variant="h6" align="center" color="primary" gutterBottom>
              Current Balance:
            </Typography>
            <Typography variant="h5" align="center" color="secondary" gutterBottom>
              ${balance}
            </Typography>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}
