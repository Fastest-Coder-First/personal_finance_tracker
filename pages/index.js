import React, { useState } from 'react';
import Head from 'next/head';
import { Container } from '@mui/material';
//import appbar, toolbar, and typography from mui
import { AppBar, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
//import createTheme from mui
import { createTheme } from '@mui/material/styles';
//import themeprovider from mui
import { ThemeProvider } from '@mui/material/styles';
//import tiltcard from components
import TiltedCard from '../components/TiltedCard';
//import transactionform from components
import TransactionForm from '../components/TransactionForm';
//import transactionlist from components
import TransactionList from '../components/TransactionList';
//import mui grid
import Grid from '@mui/material/Grid';
//import quotes from components
import Quotes from '../components/quotes';
//create a theme named myTheme with primary and secondary colors
const myTheme = createTheme({
  palette: {
    primary: {
      main: '#0095cd',
    },
    secondary: {
      main: '#424242',
    },
  },
});

//create a function for home
export default function Home() {
  //create a state for transactions
  const [transactions, setTransactions] = useState([]);
   //create a variable for total transaction amount initially set to 0
   let totalTransactionAmount = 0;
   //create a variable for spends initially set to 0
   let spends = 0;
   //create a variable for income initially set to 0
   let income = 0;
  //create a state for edit
  const [edit, setEdit] = useState(false);

  //create a function for addTransaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  //create a function for editTransaction
  const editTransaction = (index, updatedTransaction) => {
    console.log(updatedTransaction);
    const newTransactions = [...transactions];
   
    newTransactions[index] = updatedTransaction;
    setTransactions(newTransactions);
    //set edit to false
    setEdit(true);

  };
  //create a function for editTransaction1
  const editTransaction1 = () => {
    setEdit(false);
  };

  //create a function for deleteTransaction
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
    <ThemeProvider theme={myTheme}>
      <div>
        <Head>
          <title>Oversight</title>
        </Head>
        {/* //create an appbar with title Personal Finance Tracker */}
        <AppBar position="static">
          <Toolbar>
            {/* //insert image from public folder */}
            <img src="/pngegg.png" alt="logo" style={{ width: "40px", marginLeft: "-20px" }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,marginLeft:"-2px"}}>
            versight
            </Typography>
      

            <div className="balance" style={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="h6" align="center" color="secondary" gutterBottom>
                Current Balance:
              </Typography>
              <Typography variant="h5" align="center" color="white" style={{ marginLeft: "10px" }} gutterBottom>
                ${balance}
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Typography variant='h6'align='center' style={{marginTop:"5px",color:"#0095cd"}}>
          <i style={{marginRight:"10px"}}>
          "Think ahead, don’t let day to day operations drive out planning"
           </i>
           ~Donald Rumsfeld
           </Typography>
        {/* //create a container with maxWidth of sm and a margin of 30px from typography */}
        <Grid container justifyContent="center" style={{ marginTop: "30px", height: "70vh" }}>
          <Grid item xs={12} sm={6} md={3}>
            <TransactionForm addTransaction={addTransaction}/>
            {/* //add quoted component */}
            <Quotes />
            {/* <TiltedCard title="Finance Planning" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /> */}
          </Grid>
          <Grid item xs={12} sm={6} md={9}>
            <TransactionList
              transactions={transactions}
              editTransaction={editTransaction} edit={edit} editTransaction1={editTransaction1}
              deleteTransaction={deleteTransaction}
            />
          </Grid>
          <Grid item xs={12}>
 
          </Grid>
        </Grid>
        <footer className="footer" style={{ backgroundColor: "#0095cd",marginTop:"5px" }}>
          <Container maxWidth="lg">
            <Grid container justifyContent="right" style={{ alignSelf: "flex-end" }}>
              <Typography variant="body2" color="secondary" style={{ display: "grid", alignContent: "flex-end", marginBottom: "10px", marginRight: "20px" }}>
                Personal Finance Tracker developed by Sowndharya R for
              </Typography>
              <img src="https://www.fastestcoderfirst.com/assets/img/Fastest-Coder-Hackathon-Logo.png" alt="Fastest Hacker" style={{ height: "70px" }} />
            </Grid>
          </Container>
        </footer>
      </div>
    </ThemeProvider>
  );
}
