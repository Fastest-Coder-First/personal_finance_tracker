import React from 'react';
//import mui delete icon
import DeleteIcon from '@mui/icons-material/Delete';
//import edit icon from mui
import EditIcon from '@mui/icons-material/Edit';
//import textfield from mui
import TextField from '@mui/material/TextField';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
//import material ui typography
import Typography from '@mui/material/Typography';
//impoty mui grid
import Grid from '@mui/material/Grid';
//import mui save icon
import SaveIcon from '@mui/icons-material/Save';
//create function for editTransaction and deleteTransaction
const editTransaction = (index, updatedTransaction) => {
  const newTransactions = [...transactions];
  newTransactions[index] = updatedTransaction;
  setTransactions(newTransactions);
};
//create function for deleteTransaction
const deleteTransaction = (index) => {
  const newTransactions = [...transactions];
  newTransactions.splice(index, 1);
  setTransactions(newTransactions);
};
//transaction list component which takes transactions, editTransaction, and deleteTransaction as props
function TransactionList({ transactions, editTransaction, deleteTransaction, edit, editTransaction1 }) {
  console.log(transactions);
  return (

    <div className="transaction-list">
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="subtitle1" color="textSecondary">Amount</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="subtitle1" color="textSecondary">Description</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="subtitle1" color="textSecondary">Credit/Debit</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="subtitle1" color="textSecondary">Mode</Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography variant="subtitle1" color="textSecondary">Actions</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        {/* //add a div with 2px height and background color as primary.main */}
        <div style={{ height: '2px', margin: "10px", backgroundColor: '#0095cd' }}></div>
        {transactions.map((transaction, index) => (
          //create list item with description and amount
          <ListItem key={index}>
            {!edit ? <>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <ListItemText style={{ textAlign: "left" }} primary={transaction.description} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <ListItemText primary={`$${transaction.amount}`} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <ListItemText primary={transaction.type == "income" ? "Credit" : "Debit"} />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <ListItemText primary={transaction.mode} />
                </Grid>
                <Grid item xs={12} sm={1}>
                  <ListItemSecondaryAction>
                    {/* //create edit button */}
                    <EditIcon color="primary" onClick={() => editTransaction(index, transaction)}></EditIcon>
                    {/* <Button onClick={() => editTransaction(index, transaction)}>Edit</Button> */}
                    <DeleteIcon color="secondary" onClick={() => deleteTransaction(index)}></DeleteIcon>
                    {/* <Button onClick={() => deleteTransaction(index)}></Button>      */}
                  </ListItemSecondaryAction>
                </Grid>
              </Grid>
            </> :
              <>
                {/* //create editable text field for description and amount 
   //create editable text field for description and amount with onChange event to update the transaction */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={2}>
                    <ListItemText primary={<TextField type="number" name='amount' value={transaction.amount} />} onChange={(e) => editTransaction(index, { ...transaction, [e.target.name]: e.target.value })} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <ListItemText primary={<TextField name='description' value={transaction.description} style={{ width: "100%" }} />} onChange={(e) => editTransaction(index, { ...transaction, [e.target.name]: e.target.value })} />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <ListItemText primary={transaction.type == "income" ? "Credit" : "Debit"} />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <ListItemText primary={transaction.mode} />
                  </Grid>
                  {/* <ListItemText  primary={<TextField value={transaction.description} />} secondary={<TextField value={transaction.amount} />} /> */}
                  <Grid item xs={12} sm={1}>
                    {/* //create an icon button for save */}
                    <SaveIcon color="primary" onClick={() => editTransaction1()}></SaveIcon>

                  </Grid>
                </Grid>
              </>}
            {/* //create save button */}



          </ListItem>

        ))}
      </List>
    </div>
  );
}

export default TransactionList;
