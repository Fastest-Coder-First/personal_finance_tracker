import React from 'react';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
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
function TransactionList({ transactions, editTransaction, deleteTransaction }) {
  return (
    <div className="transaction-list">
      <List>
        {transactions.map((transaction, index) => (
          //create list item with description and amount
          <ListItem key={index}>
    
            <ListItemText primary={transaction.description} secondary={`$${transaction.amount}`} />
          
            <ListItemSecondaryAction>
       
              {/* <Button onClick={() => editTransaction(index, transaction)}>Edit</Button> */}
       
              <Button onClick={() => deleteTransaction(index)}>Delete</Button>     
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TransactionList;
