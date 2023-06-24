import React, { useState } from 'react';
import { TextField, Button, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function TransactionForm({ addTransaction }) {
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() === '' || amount.trim() === '') {
      return;
    }

    const transaction = {
      type,
      description,
      amount: parseFloat(amount),
    };

    addTransaction(transaction);

    setDescription('');
    setAmount('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* //create a grid container with 3 columns */}
        <Grid container spacing={2} alignItems="center">
          {/* //create a grid item with 12 columns on small screens and 4 columns on medium screens */}
          <Grid item xs={12} md={4}>
            {/* //create a form control with a select input */} 
            <FormControl fullWidth>
              <InputLabel id="transaction-type-label">Type</InputLabel>
              <Select
                labelId="transaction-type-label"
                id="transaction-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                fullWidth
              >
              
                <MenuItem value="income">Income</MenuItem>
                <MenuItem value="expense">Expense</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* //create a grid item with 12 columns on small screens and 4 columns on medium screens */}
          <Grid item xs={12} md={4}>
            <TextField
              id="transaction-description"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="transaction-amount"
              label="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
            />
          </Grid>
          {/* //create add transaction button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Transaction
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default TransactionForm;
