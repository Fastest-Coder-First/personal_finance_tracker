import React, { useState } from 'react';
import { TextField, Button, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
//import mui input adornment
import InputAdornment from '@mui/material/InputAdornment';
//import mui card
import Card from '@mui/material/Card';
function TransactionForm({ addTransaction }) {
  const [type, setType] = useState('income');
  //create a state for mode of payment
  const [mode, setMode] = useState('cash');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  //create a state for date time
  const [dateTime, setDateTime] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() === '' || amount.trim() === '') {
      return;
    }

    const transaction = {
      dateTime,
      type,
      description,
      mode,
      amount: parseFloat(amount),
    };

    addTransaction(transaction);

    setDescription('');
    setAmount('');
  };

  return (
    // create a card with elevation 10
    <Card elevation={10} style={{ padding: "20px" }}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* //create a grid container with 3 columns */}
          <Grid container spacing={2} alignItems="center">
            {/* //create a grid item with 12 columns on small screens and 4 columns on medium screens */}
            <Grid item xs={12} sm={5}>
              {/* //create a form control with a select input */}
              <FormControl fullWidth>
                <InputLabel id="transaction-type-label">Type</InputLabel>
                <Select
                  variant='standard'
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
            <Grid item xs={12} sm={7}>
              {/* //create a dropdown to select mode of payment */}
              <FormControl fullWidth>
                <InputLabel id="transaction-mode-label">Mode</InputLabel>
                <Select
                  variant='standard'
                  labelId="transaction-mode-label"
                  id="transaction-mode"
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="cash">Cash</MenuItem>
                  <MenuItem value="online">Online Transaction</MenuItem>
                  <MenuItem value="cheque">Cheque</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* //create a grid item with 12 columns on small screens and 4 columns on medium screens */}
            <Grid item xs={12}>
              <TextField
                id="transaction-description"
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              {/* //add a TextField for amount with dollar sign acronym */}
              <TextField
                id="transaction-amount"
                label="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    $
                  </InputAdornment>
                }
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
    </Card>
  );
}

export default TransactionForm;
