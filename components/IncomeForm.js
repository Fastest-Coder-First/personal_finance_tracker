import React, { useState } from 'react';

function IncomeForm({ addIncome }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() === '' || amount.trim() === '') {
      return;
    }

    const income = {
      description,
      amount: parseFloat(amount),
    };

    addIncome(income);

    setDescription('');
    setAmount('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button type="submit">Add Income</button>
      </form>
    </div>
  );
}

export default IncomeForm;
