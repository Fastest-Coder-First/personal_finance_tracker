import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
//include button from mui
import Button from '@mui/material/Button';
const quotes = [
  "A budget is telling your money where to go instead of wondering where it went. - Dave Ramsey",
  "The stock market is filled with individuals who know the price of everything, but the value of nothing. - Philip Fisher",
  "Do not save what is left after spending, but spend what is left after saving. - Warren Buffett",
  "Financial freedom is available to those who learn about it and work for it. - Robert Kiyosaki",
  "The best investment you can make is in yourself. - Warren Buffett",
];

const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div className="quotes" style={{marginTop:"10px",backgroundColor:"#e1f5fe",height:"25vh",padding:"20px",alignContent:"space-around"}}>
        <Typography variant="h6" style={{color:"#424242"}}>
        Knock.. Knock..</Typography>
     <i> 
      <Typography variant="subtitle1" style={{flexGrow: 1,marginTop:"10px",marginBottom:"20px"}}>{randomQuote}</Typography></i>
      <Button type="submit" variant="contained" color="primary" onClick={generateRandomQuote}>
      Okay.. Next?</Button>
    </div>
  );
};

export default Quotes;
